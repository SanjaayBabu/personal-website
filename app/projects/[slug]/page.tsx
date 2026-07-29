// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { visit } from "unist-util-visit";
import BackToProjects from "@/components/projects/BackToProjects";
import { siteConfig } from "@/lib/site";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

function remarkRewriteProjectImages() {
  return (tree: any) => {
    visit(tree, "image", (node: any) => {
      const url: string = node.url || "";
      if (!url || /^https?:\/\//i.test(url) || url.startsWith("/")) return;
      const cleaned = url.replace(/^\.\//, "").replace(/^images\//, "");
      node.url = `/projects/images/${cleaned}`;
    });
  };
}

type Props = { params: Promise<{ slug: string }> };

function readRawProject(slug: string) {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const c of candidates) {
    const p = path.join(CONTENT_DIR, c);
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, "utf8");
      const parsed = matter(raw);
      return { raw: parsed.content, meta: parsed.data || {} };
    }
  }
  return null;
}

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));
  return files.map((f) => ({ slug: f.replace(/\.mdx?$/, "") }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const raw = readRawProject(slug);

  if (!raw) {
    return { title: "Not found" };
  }

  const meta: any = raw.meta || {};
  const title = meta.title || slug.replace(/[-_]/g, " ");
  const description = meta.summary || meta.description || siteConfig.description;
  const url = `${siteConfig.url}/projects/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage(props: Props) {
  const { slug } = await props.params;
  const raw = readRawProject(slug);

  if (!raw) notFound();

  const { raw: content, meta } = raw;

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRewriteProjectImages)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const htmlContent = processed.toString();

  let tags: string[] = [];
  if (meta.tags) {
    if (Array.isArray(meta.tags)) {
      tags = meta.tags.map((t: any) => String(t).trim()).filter(Boolean);
    } else if (typeof meta.tags === "string") {
      tags = meta.tags.split(",").map((s: string) => s.trim()).filter(Boolean);
    }
  }

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl">
        <article>
          <BackToProjects />

          <header className="mb-6">
            <h1 className={`${lora.className} text-4xl sm:text-5xl font-semibold leading-tight`}>
              {meta.title || meta.role || slug.replace(/[-_]/g, " ")}
            </h1>

            <div className="mt-2 text-sm text-muted-foreground">
              <span>{meta.org}</span>
              {meta.period && <span> &middot; {meta.period}</span>}
            </div>

            {meta.summary && (
              <p className="mt-4 text-lg text-muted-foreground">{meta.summary}</p>
            )}
          </header>

          <section
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {tags.length > 0 && (
            <footer className="mt-8">
              <div className="flex flex-wrap gap-2">
                {tags.map((t: string) => (
                  <span key={t} className="text-sm px-2 py-1 rounded border">
                    {t}
                  </span>
                ))}
              </div>
            </footer>
          )}
        </article>
      </div>
    </main>
  );
}
