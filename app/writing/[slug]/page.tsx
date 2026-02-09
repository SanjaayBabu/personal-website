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
 * remark plugin to rewrite relative image URLs to a shared images folder.
 * This assumes images referenced in MDX with ./image.jpg should map to:
 * /content/writing/images/image.jpg
 */
function remarkRewriteImages() {
  return () => (tree: any) => {
    visit(tree, "image", (node: any) => {
      const url: string = node.url || "";
      if (!url) return;

      // leave absolute URLs and root paths alone
      if (/^https?:\/\//i.test(url)) return;
      if (url.startsWith("/")) return;

      // normalize ./images/image.jpg -> image.jpg
      const cleaned = url.replace(/^\.\//, "").replace(/^images\//, "");

      // rewrite to the central content images path
      node.url = `/content/writing/images/${cleaned}`;
    });
  };
}

/**
 * Server component that serializes MDX and renders with MDXPost.
 * Note: do NOT destructure params in the function signature (see Next warning).
 */
export default async function PostPage(props: Props) {
  const slug = props.params?.slug;

  const raw = readRawPost(slug);

  if (!raw) {
    notFound();
  }

  const { raw: content, meta } = raw;

  let mdxSource: MDXRemoteSerializeResult;
  try {
    mdxSource = await serialize(content, {
      mdxOptions: {
        // enable GitHub Flavored Markdown and rewrite images
        remarkPlugins: [remarkGfm, remarkRewriteImages()],
        // do NOT add rehype-raw here to avoid mdxJsxFlowElement serialization errors
      },
    });
  } catch (err) {
    // show helpful console output for debugging
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