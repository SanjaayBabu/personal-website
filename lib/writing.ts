// lib/writing.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { visit } from "unist-util-visit";

export type PostMeta = {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
  tags?: string[]; // NEW: optional array of tags
};

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

function normalizeTags(raw: unknown): string[] | undefined {
  if (!raw) return undefined;
  if (Array.isArray(raw)) {
    const result = raw.map((t: any) => String(t).trim()).filter(Boolean);
    return result.length ? result : undefined;
  }
  if (typeof raw === "string") {
    const result = raw.split(",").map((s) => s.trim()).filter(Boolean);
    return result.length ? result : undefined;
  }
  return undefined;
}

export function getAllPostFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));
}

export function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

export function getPostMetaFromFile(filename: string): PostMeta {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const meta = parsed.data || {};
  const tags = normalizeTags(meta.tags);
  return {
    slug: getSlugFromFilename(filename),
    title:
      meta.title ||
      getSlugFromFilename(filename).replace(/[-_]/g, " "),
    date: meta.date,
    summary: meta.summary || meta.description || meta.excerpt || "",
    tags,
  };
}

export function getAllPostsMeta(): PostMeta[] {
  const files = getAllPostFiles();
  const metas = files.map(getPostMetaFromFile);
  metas.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return metas;
}

/**
 * Read a raw post by slug. Returns filePath too so image resolution can use it.
 */
export function readRawPost(slug: string) {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const c of candidates) {
    const p = path.join(CONTENT_DIR, c);
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, "utf8");
      const parsed = matter(raw);
      return { raw: parsed.content, meta: parsed.data || {}, filePath: p };
    }
  }
  return null;
}

/**
 * Remark plugin: rewrite relative image URLs to an image-serving API endpoint.
 */
function remarkRewriteImages(slug: string) {
  return () => (tree: any) => {
    visit(tree, "image", (node: any) => {
      const url: string = node.url || "";
      if (!url) return;
      if (/^https?:\/\//i.test(url)) return;
      if (url.startsWith("/")) return;
      const cleaned = url.replace(/^\.\//, "");
      const encoded = encodeURIComponent(cleaned);
      node.url = `/api/writing/image?slug=${encodeURIComponent(slug)}&img=${encoded}`;
    });
  };
}

export async function renderMarkdownToHtml(markdown: string, slug?: string) {
  const preprocessed = markdown; // keep hook for future preprocessors
  const processor = slug
    ? remark().use(remarkRewriteImages(slug)).use(html)
    : remark().use(html);
  const result = await processor.process(preprocessed);
  return String(result);
}

export async function getPostBySlug(slug: string) {
  const r = readRawPost(slug);
  if (!r) return null;
  const rendered = await renderMarkdownToHtml(r.raw, slug);
  const tags = normalizeTags(r.meta?.tags);
  return {
    html: rendered,
    meta: {
      title: r.meta.title || slug.replace(/[-_]/g, " "),
      date: r.meta.date,
      summary: r.meta.summary || r.meta.description || "",
      tags,
    },
  };
}