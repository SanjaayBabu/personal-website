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
};

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

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
  return {
    slug: getSlugFromFilename(filename),
    title:
      meta.title ||
      getSlugFromFilename(filename).replace(/[-_]/g, " "),
    date: meta.date,
    summary: meta.summary || meta.description || "",
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
 * It converts image nodes like:
 *   ![alt](./images/foo.jpg)
 * into
 *   <img src="/api/writing/image?slug=<slug>&img=<encoded-path>" />
 *
 * We only rewrite non-absolute URLs (not starting with http or /).
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

// add this near the bottom of lib/writing.ts (after remarkRewriteImages)
export async function getAllPosts() {
  // get metas (sorted) from existing function
  const metas = getAllPostsMeta();

  const posts = await Promise.all(
    metas.map(async (meta) => {
      // read the raw post (returns { raw, meta, filePath } or null)
      const rawPost = readRawPost(meta.slug);

      if (!rawPost) {
        // if the raw post is missing, just return the meta so page doesn't crash
        return meta;
      }

      // process markdown -> html, rewriting relative image URLs using your plugin
      const processed = await remark()
        .use(remarkRewriteImages(meta.slug))
        .use(html)
        .process(rawPost.raw);

      return {
        ...meta,
        // rendered HTML string of the post body
        content: String(processed),
        // file path (useful for image resolution code you mentioned)
        filePath: rawPost.filePath,
      };
    })
  );

  return posts;
}

/**
 * Lightweight "MDX components" preprocessor:
 * Rewrites a few custom JSX-style tags to semantic HTML blocks so they can
 * be styled via CSS. This is intentionally simple and safe:
 *  <Callout>Some text</Callout>  -> <div class="callout">Some text</div>
 *  <Aside>...</Aside>            -> <aside class="mdx-aside">...</aside>
 *
 * The replacement is done before remark runs so remark-html will pass the
 * produced HTML through unchanged.
 *
 * You can add more tags here as needed.
 */
function preprocessMdxLikeComponents(markdown: string) {
  // Callout: allow attributes on opening tag (ignored for now)
  markdown = markdown.replace(
    /<Callout(?:\s[^>]*)?>([\s\S]*?)<\/Callout>/gi,
    (_match, inner) => `\n\n<div class="callout">\n\n${inner.trim()}\n\n</div>\n\n`
  );

  // Aside
  markdown = markdown.replace(
    /<Aside(?:\s[^>]*)?>([\s\S]*?)<\/Aside>/gi,
    (_match, inner) => `\n\n<aside class="mdx-aside">\n\n${inner.trim()}\n\n</aside>\n\n`
  );

  // Simple inline Marker for tips: <Tip>text</Tip> -> styled span
  markdown = markdown.replace(
    /<Tip(?:\s[^>]*)?>([\s\S]*?)<\/Tip>/gi,
    (_match, inner) => `<span class="mdx-tip">${inner.trim()}</span>`
  );

  return markdown;
}

export async function renderMarkdownToHtml(markdown: string, slug?: string) {
  // Run the small MDX-like preprocessing (this lets authors write <Callout>...</Callout>)
  const preprocessed = preprocessMdxLikeComponents(markdown);

  // If slug provided, install the rewrite-images plugin so relative images point to our API.
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
  return {
    html: rendered,
    meta: {
      title: r.meta.title || slug.replace(/[-_]/g, " "),
      date: r.meta.date,
      summary: r.meta.summary || r.meta.description || "",
    },
  };
}