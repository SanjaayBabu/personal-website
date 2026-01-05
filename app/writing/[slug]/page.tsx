// app/writing/[slug]/page.tsx
import { notFound } from "next/navigation";
import { readRawPost } from "@/lib/writing";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { visit } from "unist-util-visit";
import MDXPost from "@/components/writing/MDXPost";
import Link from "next/link";

type Props = { params: { slug: string } };

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

export default async function PostPage({ params }: Props) {
  // params can be a Promise in some Next versions — await it to be safe
  const { slug } = (await params) as { slug: string };

  const raw = readRawPost(slug);

  if (!raw) {
    notFound();
  }

  const { raw: content, meta } = raw;

  let mdxSource: MDXRemoteSerializeResult;
  try {
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkRewriteImages(slug)],
      },
      parseFrontmatter: false,
    });
  } catch (err) {
    console.error("MDX serialize error:", err);
    notFound();
  }

  const tags: string[] = Array.isArray(meta?.tags)
    ? meta.tags
    : typeof meta?.tags === "string"
    ? String(meta.tags).split(",").map((t: string) => t.trim()).filter(Boolean)
    : [];

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl">
        <article>
          {/* BackToHome component can stay if you already added it */}
          {/* <BackToHome /> */}

          <header className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              {meta.title || slug.replace(/[-_]/g, " ")}
            </h1>
            {meta.date && (
              <div className="mt-2 text-sm text-muted-foreground">{meta.date}</div>
            )}

            {/* TAGS: render as pills */}
            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 items-center">
                {tags.map((t) => (
                  <Link
                    key={t}
                    href={`/writing?tag=${encodeURIComponent(t)}`}
                    className="text-sm inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-border/40 bg-card/10 hover:shadow-sm transition text-muted-foreground"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            )}

            {meta.summary && (
              <p className="mt-4 text-lg text-muted-foreground">{meta.summary}</p>
            )}
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none">
            <MDXPost source={mdxSource as any} />
          </section>
        </article>
      </div>
    </main>
  );
}