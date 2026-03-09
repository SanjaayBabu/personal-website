import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readRawPost, renderMarkdownToHtml } from "@/lib/writing";
import { render } from "@react-email/render";
import ArticleEmail from "@/emails/ArticleEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjaaybabu.com";

export async function POST(req: NextRequest) {
  try {
    // --- Auth ---
    const auth = req.headers.get("authorization") ?? "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!token || token !== process.env.NEWSLETTER_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // --- Parse slug ---
    let slug: string;
    try {
      const body = await req.json();
      slug = (body.slug ?? "").trim();
      if (!slug) throw new Error("missing slug");
    } catch {
      return NextResponse.json({ error: "Missing or invalid slug" }, { status: 400 });
    }

    // --- Read article ---
    const raw = readRawPost(slug);
    if (!raw) {
      return NextResponse.json(
        { error: `Post not found: ${slug}` },
        { status: 404 }
      );
    }
    const { raw: mdxContent, meta } = raw;

    // --- Render MDX → HTML, make all URLs absolute for email clients ---
    const relativeHtml = await renderMarkdownToHtml(mdxContent, slug);
    const articleHtml = relativeHtml.replace(
      /(src|href)="\//g,
      `$1="${SITE_URL}/`
    );

    // --- Fetch active subscribers ---
    const audienceId = process.env.RESEND_AUDIENCE_ID!;
    const contactsResponse = await resend.contacts.list({ audienceId });
    const subscribers = (
      (contactsResponse.data as { data?: { id: string; email: string; unsubscribed: boolean }[] })
        ?.data ?? []
    ).filter((c) => !c.unsubscribed);

    if (subscribers.length === 0) {
      return NextResponse.json({ sent: 0, message: "No active subscribers" });
    }

    // --- Post metadata for template ---
    const postMeta = {
      title: (meta as Record<string, string>).title ?? slug.replace(/[-_]/g, " "),
      date: (meta as Record<string, string>).date ?? "",
      summary:
        (meta as Record<string, string>).excerpt ??
        (meta as Record<string, string>).summary ??
        "",
      slug,
      url: `${SITE_URL}/writing/${slug}`,
    };

    // --- Send to each subscriber ---
    const results: { sent: number; failed: number; errors: string[] } = {
      sent: 0,
      failed: 0,
      errors: [],
    };

    for (const contact of subscribers) {
      const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?id=${contact.id}&audienceId=${audienceId}`;

      const emailHtml = await render(
        ArticleEmail({ post: postMeta, articleHtml, unsubscribeUrl })
      );

      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL!,
          to: contact.email,
          subject: postMeta.title,
          html: emailHtml,
        });
        results.sent++
      } catch (err) {
        results.failed++;
        const msg = err instanceof Error ? err.message : String(err);
        results.errors.push(`${contact.email}: ${msg}`);
        console.error(`Failed to send to ${contact.email}:`, err);
      }
    }

    return NextResponse.json(results);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error("send-newsletter fatal error:", err);
    return NextResponse.json({ error: message, stack }, { status: 500 });
  }
}
