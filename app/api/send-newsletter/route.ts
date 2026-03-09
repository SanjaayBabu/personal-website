import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readRawPost, renderMarkdownToHtml } from "@/lib/writing";

export const runtime = "nodejs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanjaaybabu.com";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function isRateLimitError(err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.includes("429") || msg.toLowerCase().includes("too many requests");
}

function isSuppressionError(err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  // Resend errors vary; this catches the common cases shown in logs
  return (
    msg.toLowerCase().includes("suppression") ||
    msg.toLowerCase().includes("suppressed") ||
    msg.toLowerCase().includes("blocked")
  );
}

async function sendWithRetry(
  resend: Resend,
  payload: {
    from: string;
    to: string;
    subject: string;
    html: string;
  },
  opts: { maxAttempts: number; baseDelayMs: number }
) {
  let attempt = 0;
  // Basic exponential backoff for 429s
  while (true) {
    attempt++;
    try {
      return await resend.emails.send(payload);
    } catch (err) {
      if (isRateLimitError(err) && attempt < opts.maxAttempts) {
        const wait = opts.baseDelayMs * Math.pow(2, attempt - 1);
        await sleep(wait);
        continue;
      }
      throw err;
    }
  }
}

function buildEmailHtml(opts: {
  post: { title: string; date: string; summary: string; url: string };
  articleHtml: string;
  unsubscribeUrl: string;
}): string {
  const { post, articleHtml, unsubscribeUrl } = opts;
  const siteUrl = SITE_URL;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(post.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Geist',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;margin:48px auto;padding:0 24px;">

          <tr>
            <td style="padding-bottom:32px;">
              <a href="${siteUrl}/writing" style="font-size:13px;color:#737373;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;">
                Sanjaay Babu &middot; Writing
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <h1 style="font-size:32px;font-weight:600;line-height:1.2;margin:0 0 8px 0;color:#0a0a0a;">
                ${esc(post.title)}
              </h1>
            </td>
          </tr>

          ${post.date ? `
          <tr>
            <td>
              <p style="font-size:13px;color:#737373;margin:0 0 16px 0;">${esc(post.date)}</p>
            </td>
          </tr>` : ""}

          ${post.summary ? `
          <tr>
            <td>
              <p style="font-size:17px;color:#525252;line-height:1.6;margin:0 0 32px 0;">${esc(post.summary)}</p>
            </td>
          </tr>` : ""}

          <tr>
            <td style="padding-bottom:32px;">
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:0;" />
            </td>
          </tr>

          <tr>
            <td style="font-size:16px;line-height:1.75;color:#0a0a0a;">
              ${articleHtml}
            </td>
          </tr>

          <tr>
            <td style="padding:40px 0 32px;">
              <hr style="border:none;border-top:1px solid #e5e5e5;margin:0;" />
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-bottom:40px;">
              <a href="${esc(post.url)}" style="background-color:#0a0a0a;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:14px;text-decoration:none;display:inline-block;">
                Read on the site
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <p style="font-size:12px;color:#a3a3a3;line-height:1.6;text-align:center;">
                You&apos;re receiving this because you subscribed on sanjaaybabu.com.<br />
                <a href="${esc(unsubscribeUrl)}" style="color:#a3a3a3;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // --- Auth ---
    const auth = req.headers.get("authorization") ?? "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!token || token !== process.env.NEWSLETTER_SECRET) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          _debug: {
            secretSet: !!process.env.NEWSLETTER_SECRET,
            secretLen: process.env.NEWSLETTER_SECRET?.length ?? 0,
            tokenLen: token.length,
          },
        },
        { status: 401 }
      );
    }

    // --- Parse slug ---
    let slug: string;
    try {
      const body = await req.json();
      slug = (body.slug ?? "").trim();
      if (!slug) throw new Error("missing slug");
    } catch {
      return NextResponse.json(
        { error: "Missing or invalid slug" },
        { status: 400 }
      );
    }

    // --- Read article ---
    const raw = readRawPost(slug);
    if (!raw) {
      return NextResponse.json({ error: `Post not found: ${slug}` }, { status: 404 });
    }
    const { raw: mdxContent, meta } = raw;

    // --- Render MDX → HTML, make URLs absolute ---
    const relativeHtml = await renderMarkdownToHtml(mdxContent, slug);
    const articleHtml = relativeHtml.replace(
      /(src|href)="\//g,
      `$1="${SITE_URL}/`
    );

    // --- Fetch active subscribers ---
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return NextResponse.json({ error: "Missing RESEND_AUDIENCE_ID" }, { status: 500 });
    }

    // NOTE: contacts.list() returns { data: Contact[] } (not nested data.data)
    const contactsResponse = await resend.contacts.list({ audienceId });
    const contacts = (contactsResponse as any)?.data ?? [];

    const subscribers = (Array.isArray(contacts) ? contacts : [])
      .filter((c: any) => c?.email && c?.unsubscribed !== true);

    if (subscribers.length === 0) {
      return NextResponse.json({ sent: 0, message: "No active subscribers" });
    }

    // --- Post metadata ---
    const metaObj = meta as Record<string, string>;
    const postMeta = {
      title: metaObj.title ?? slug.replace(/[-_]/g, " "),
      date: metaObj.date ?? "",
      summary: metaObj.excerpt ?? metaObj.summary ?? "",
      url: `${SITE_URL}/writing/${slug}`,
    };

    // --- Send sequentially with throttling + retry ---
    const results: {
      total: number;
      sent: number;
      suppressed: number;
      failed: number;
      errors: string[];
    } = {
      total: subscribers.length,
      sent: 0,
      suppressed: 0,
      failed: 0,
      errors: [],
    };

    // Keep below 2 req/sec => >= 600ms spacing is safe.
    const perEmailDelayMs = 650;

    for (const contact of subscribers) {
      const email = String(contact.email).trim();
      const contactId = String(contact.id ?? "");
      const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?id=${encodeURIComponent(
        contactId
      )}&audienceId=${encodeURIComponent(audienceId)}`;

      const emailHtml = buildEmailHtml({
        post: { ...postMeta, url: postMeta.url },
        articleHtml,
        unsubscribeUrl,
      });

      try {
        await sendWithRetry(
          resend,
          {
            from: process.env.RESEND_FROM_EMAIL!,
            to: email,
            subject: postMeta.title,
            html: emailHtml,
          },
          { maxAttempts: 4, baseDelayMs: 800 }
        );

        results.sent++;
      } catch (err) {
        if (isSuppressionError(err)) {
          results.suppressed++;
        } else {
          results.failed++;
        }

        const msg = err instanceof Error ? err.message : String(err);
        results.errors.push(`${email}: ${msg}`);
        console.error(`Failed to send to ${email}:`, err);
      }

      // throttle between sends
      await sleep(perEmailDelayMs);
    }

    return NextResponse.json(results);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error("send-newsletter fatal error:", err);
    return NextResponse.json({ error: message, stack }, { status: 500 });
  }
}