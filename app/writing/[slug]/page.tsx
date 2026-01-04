// app/writing/[slug]/page.tsx
import { notFound } from "next/navigation";
import { readRawPost } from "@/lib/writing";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { visit } from "unist-util-visit";
import MDXPost from "@/components/writing/MDXPost";
import BackToHome from "@/components/writing/BackToHome";

type Props = { params: { slug: string } };

/**
 * Remark plugin that rewrites relative image URLs in MDX image nodes
 * into our image-serving endpoint: /api/writing/image?slug=...&img=...
 *
 * We intentionally only rewrite non-absolute, non-root paths.
 */
function remarkRewriteImages(slug: string) {
  return () => (tree: any) => {
    visit(tree, "image", (node: any) => {
      const url: string = node.url || "";
      if (!url) return;
      if (/^https?:\/\//i.test(url)) return; // external URL — leave alone
      if (url.startsWith("/")) return; // absolute path — leave alone

      const cleaned = url.replace(/^\.\//, ""); // remove leading ./
      const encoded = encodeURIComponent(cleaned);
      node.url = `/api/writing/image?slug=${encodeURIComponent(slug)}&img=${encoded}`;
    });
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = (await params) as { slug: string };
  const raw = readRawPost(slug);

  if (!raw) {
    notFound();
  }

  const { raw: content, meta } = raw;

  // Serialize the MDX on the server. We include our image-rewrite remark plugin.
  // next-mdx-remote will produce a serializable `source` that the client MDXPost
  // component can render with the component mappings you added.
  let mdxSource: MDXRemoteSerializeResult;
  try {
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkRewriteImages(slug)],
        // You can add rehype plugins here if desired later.
      },
      // Keep frontmatter parsing off here because we already read it via gray-matter.
      parseFrontmatter: false,
    });
  } catch (err) {
    console.error("MDX serialize error:", err);
    notFound();
  }

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-3xl">
        <article>
          <BackToHome />
          
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              {meta.title || slug.replace(/[-_]/g, " ")}
            </h1>
            {meta.date && (
              <div className="mt-2 text-sm text-muted-foreground">{meta.date}</div>
            )}
            {meta.summary && (
              <p className="mt-4 text-lg text-muted-foreground">{meta.summary}</p>
            )}
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none">
            {/* MDXPost is a client component that renders the serialized MDX */}
            <MDXPost source={mdxSource as any} />
          </section>
        </article>
      </div>
    </main>
  );
}