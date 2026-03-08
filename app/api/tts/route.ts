import { NextRequest, NextResponse } from "next/server";

const GOOGLE_TTS_URL =
  "https://texttospeech.googleapis.com/v1/text:synthesize";

const MAX_CHARS = 4500; // Google TTS limit is 5000; keep some headroom

/**
 * Split text into chunks of at most MAX_CHARS characters,
 * preferring to break at sentence boundaries (. ! ? followed by space).
 */
function chunkText(text: string): string[] {
  if (text.length <= MAX_CHARS) return [text];

  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > MAX_CHARS) {
    // Look for a sentence boundary within the last 500 chars of the window
    const window = remaining.slice(0, MAX_CHARS);
    const breakAt = window.search(/[.!?][^.!?]*$/);

    let cutAt: number;
    if (breakAt > 0) {
      // +1 to include the punctuation character
      cutAt = breakAt + 1;
    } else {
      // Fall back to the last space
      const lastSpace = window.lastIndexOf(" ");
      cutAt = lastSpace > 0 ? lastSpace : MAX_CHARS;
    }

    chunks.push(remaining.slice(0, cutAt).trim());
    remaining = remaining.slice(cutAt).trim();
  }

  if (remaining.length > 0) chunks.push(remaining);
  return chunks;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey || apiKey === "your_api_key_here") {
    return NextResponse.json(
      { error: "GOOGLE_TTS_API_KEY is not configured" },
      { status: 500 }
    );
  }

  let text: string;
  try {
    const body = await req.json();
    text = body.text?.trim();
    if (!text) throw new Error("No text provided");
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const chunks = chunkText(text);

  try {
    const audioChunks: string[] = [];

    for (const chunk of chunks) {
      const res = await fetch(`${GOOGLE_TTS_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text: chunk },
          voice: {
            languageCode: "en-US",
            name: "en-US-Wavenet-D", // natural-sounding male voice
          },
          audioConfig: {
            audioEncoding: "MP3",
            speakingRate: 1.0,
            pitch: 0,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Google TTS error:", JSON.stringify(err?.error?.details ?? err, null, 2));
        return NextResponse.json(
          { error: "Google TTS API error", details: err },
          { status: 502 }
        );
      }

      const data = await res.json();
      audioChunks.push(data.audioContent);
    }

    // Concatenate all base64 chunks — MP3 frames are self-contained
    // so simple base64 concatenation works correctly
    const combined = audioChunks.join("");

    return NextResponse.json({ audioContent: combined });
  } catch (err) {
    console.error("TTS route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
