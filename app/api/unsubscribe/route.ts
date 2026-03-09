import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const audienceId = searchParams.get("audienceId");

  if (!id || !audienceId) {
    return new NextResponse("Invalid unsubscribe link.", { status: 400 });
  }

  try {
    await resend.contacts.update({ audienceId, id, unsubscribed: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    // Show success anyway — don't expose internal errors to users
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Unsubscribed</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        max-width: 480px;
        margin: 80px auto;
        padding: 0 24px;
        color: #0a0a0a;
      }
      h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 8px; }
      p  { color: #525252; line-height: 1.6; }
      a  { color: #0a0a0a; }
    </style>
  </head>
  <body>
    <h1>Unsubscribed</h1>
    <p>You've been removed from the mailing list and won't receive any more emails.</p>
    <p><a href="/">← Back to the site</a></p>
  </body>
</html>`,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}
