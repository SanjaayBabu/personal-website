// app/writing/[slug]/page.tsx
export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { readRawPost, getAllPostsMeta } from "@/lib/writing";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { visit } from "unist-util-visit";
import MDXPostWrapper from "@/components/writing/MDXPostWrapper";
import TextToSpeechPlayer from "@/components/writing/TextToSpeechPlayerWrapper";
import Link from "next/link";
import BackToHome from "@/components/writing/BackToHome";
import PostNav from "@/components/writing/PostNav";
import RelatedPosts from "@/components/writing/RelatedPosts";
import ReadingProgress from "@/components/writing/ReadingProgress";
import TableOfContents from "@/components/writing/TableOfContents";
import remarkGfm from "remark-gfm";
import { slugify, type Heading } from "@/lib/headings";

function stripMarkdown(text: string): string {
  return text
    // Remove fenced code blocks
    .replace(/```[\s\S]*?```/g, "")
    // Remove JSX/MDX components (self-closing and block)
    .replace(/<[A-Z][A-Za-z]*[^>]*\/>/g, "")
    .replace(/<[A-Z][A-Za-z]*[^>]*>[\s\S]*?<\/[A-Z][A-Za-z]*>/g, "")
    // Remove images
    .replace(/!\[.*?\]\(.*?\)/g, "")
    // Remove links, keep text
    .replace(/\[(.+?)\]\(.*?\)/g, "$1")
    // Remove headings
    .replace(/^#{1,6}\s+/gm, "")
    // Remove bold/italic
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    // Remove inline code
    .replace(/`(.+?)`/g, "$1")
    // Remove blockquotes
    .replace(/^>\s*/gm, "")
    // Collapse excess blank lines
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}


type Props = { params: Promise<{ slug: string }> };

function remarkExtractHeadings(out: Heading[]) {
  return () => (tree: any) => {
    visit(tree, "heading", (node: any) => {
      if (node.depth > 3) return;
      const text = node.children
        .filter((c: any) => c.type === "text" || c.type === "inlineCode")
        .map((c: any) => c.value)
        .join("");
      if (!text) return;
      out.push({ depth: node.depth, text, id: slugify(text) });
    });
  };
}

/**
 * remark plugin to rewrite relative image URLs to a shared images folder.
 */
function remarkRewriteImages() {
  return () => (tree: any) => {
    visit(tree, "image", (node: any) => {
      const url: string = node.url || "";
      if (!url) return;
      if (/^https?:\/\//i.test(url)) return;
      if (url.startsWith("/")) return;
      const cleaned = url.replace(/^\.\//, "").replace(/^images\//, "");
      node.url = `/content/writing/images/${cleaned}`;
    });
  };
}

export default async function PostPage(props: Props) {
  const { slug } = await props.params;

  const raw = readRawPost(slug);

  if (!raw) {
    notFound();
  }

  const { raw: content, meta } = raw;

  const headings: Heading[] = [];
  let mdxSource: MDXRemoteSerializeResult;
  try {
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkRewriteImages(), remarkExtractHeadings(headings)],
      },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("MDX serialize error:", err);
    throw err;
  }

  const tags = meta.tags
    ? String(meta.tags)
        .split(",")
        .map((t: string) => t.trim())
        .filter(Boolean)
    : [];

  // Prev / Next navigation
  const allPosts = getAllPostsMeta(); // sorted by date desc (newest first)
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null; // older
  const nextPost = idx > 0 ? allPosts[idx - 1] : null; // newer

  // Related posts: share at least one tag, exclude current
  const related = allPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        tags.some((t) => (p.tags || []).includes(t))
    )
    .slice(0, 3);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <ReadingProgress />
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-12 justify-center">
          {headings.length > 0 && (
            <aside className="hidden xl:block w-52 flex-shrink-0">
              <div className="sticky top-1/2 -translate-y-1/2">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}

          <article className="w-full max-w-3xl min-w-0">
            <BackToHome />

            <header className="mb-6">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                {meta.title || (slug ? slug.replace(/[-_]/g, " ") : "")}
              </h1>

              {meta.date && (
                <div className="mt-2 text-sm text-muted-foreground">
                  <span>{meta.date}</span>
                  {meta.readTime ? <span> • {meta.readTime}</span> : null}
                </div>
              )}

              {meta.summary && (
                <p className="mt-4 text-lg text-muted-foreground">{meta.summary}</p>
              )}
            </header>

            <TextToSpeechPlayer text={stripMarkdown(content)} />

            <section className="prose prose-lg dark:prose-invert max-w-none">
              <MDXPostWrapper source={mdxSource as any} />
            </section>

            {tags.length > 0 && (
              <footer className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {tags.map((t: string) => (
                    <Link
                      key={t}
                      href={`/writing?tag=${encodeURIComponent(t)}`}
                      className="text-sm px-2 py-1 rounded border"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </footer>
            )}

            <RelatedPosts posts={related} />

            <PostNav prev={prevPost} next={nextPost} />
          </article>

        </div>
      </div>
    </main>
  );
}
