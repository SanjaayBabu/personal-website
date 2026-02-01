// app/writing/[slug]/page.tsx
import { notFound } from "next/navigation";
import { readRawPost } from "@/lib/writing";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { visit } from "unist-util-visit";
import MDXPost from "@/components/writing/MDXPost";
import Link from "next/link";
import BackToHome from "@/components/writing/BackToHome";
import remarkGfm from "remark-gfm";

type Props = { params: { slug: string } };

/**
 * Small remark plugin to rewrite image URLs to point at /content/... or CDN.
 * This mirrors the earlier plugin in your file; keep behaviour the same.
 */
function remarkRewriteImages(slug: string) {
  return () => (tree: any) => {
    visit(tree, "image", (node: any) => {
      // node.url may already be absolute; skip if so.
      const url: string = node.url || "";
      if (!url) return;
      // Example logic: if it's a relative path (starts with ./ or no leading slash), prefix with content path
      // Adjust this rewrite to match your previous behaviour if you had a different approach.
      if (!/^https?:\/\//i.test(url) && !url.startsWith("/")) {
        node.url = `/content/writing/${slug}/${url}`; // keep consistent with your storage
      }
    });
  };
}

/**
 * Server component — reads raw MDX file, serializes it for MDXRemote,
 * and renders via MDXPost client component.
 */
export default async function PostPage({ params: { slug } }: Props) {
  const raw = readRawPost(slug);

  if (!raw) {
    notFound();
  }

  const { raw: content, meta } = raw;

  let mdxSource: MDXRemoteSerializeResult;
  try {
    mdxSource = await serialize(content, {
      mdxOptions: {
        // Use remark-gfm for GitHub Flavored Markdown (ordered lists, tables, autolinks)
        // Keep your custom remark plugin after gfm so both work together.
        remarkPlugins: [remarkGfm, remarkRewriteImages(slug)],
        // IMPORTANT: do NOT add rehype-raw here — it can inject HTML nodes that next-mdx-remote may not serialize
      },
    });
  } catch (err) {
    // If serialization fails, log and rethrow to get Next's error overlay in dev
    // This helps debugging if something unexpected appears in content.
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

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl">
        <article>
          <BackToHome />

          <header className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              {meta.title || slug.replace(/[-_]/g, " ")}
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

          <section className="prose prose-lg dark:prose-invert max-w-none">
            <MDXPost source={mdxSource as any} />
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
        </article>
      </div>
    </main>
  );
}