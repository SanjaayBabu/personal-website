// app/api/writing/image/route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

/**
 * Secure image serving for writing content.
 * Expects two query params:
 *  - slug: the post slug (e.g. "what-makes-scandinavia")
 *  - img:  the relative image path (URL-encoded), e.g. "images%2Fhelsinki.jpg"
 *
 * This handler ensures the final resolved file path is inside content/writing
 * and returns the file with a proper Content-Type.
 */

const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

function contentTypeForExtension(ext: string) {
  switch (ext.toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    case ".avif":
      return "image/avif";
    default:
      return "application/octet-stream";
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    const imgParam = url.searchParams.get("img");

    if (!slug || !imgParam) {
      return NextResponse.json({ error: "Missing slug or img query" }, { status: 400 });
    }

    // decode the img param (it was encoded in the rewrite step)
    const decodedImg = decodeURIComponent(imgParam);

    // Candidate paths:
    // 1) content/writing/<slug>/<decodedImg>
    // 2) content/writing/<decodedImg>
    const candidatePaths = [
      path.join(CONTENT_DIR, slug, decodedImg),
      path.join(CONTENT_DIR, decodedImg),
    ];

    let foundPath: string | null = null;

    for (const candidate of candidatePaths) {
      // Normalize to remove ../ segments, etc.
      const normalized = path.normalize(candidate);

      // Ensure the normalized path is within CONTENT_DIR
      const relative = path.relative(CONTENT_DIR, normalized);
      // If relative starts with '..' or is absolute outside, reject
      if (relative.startsWith("..") || path.isAbsolute(relative) && !normalized.startsWith(CONTENT_DIR)) {
        // skip unsafe candidate
        continue;
      }

      if (fs.existsSync(normalized)) {
        const st = fs.statSync(normalized);
        if (st.isFile()) {
          foundPath = normalized;
          break;
        }
      }
    }

    if (!foundPath) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Read file (synchronous read is fine for small sites; could stream if preferred)
    const buffer = fs.readFileSync(foundPath);
    const ext = path.extname(foundPath);
    const contentType = contentTypeForExtension(ext);

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    // Cache aggressively for static content
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(buffer, { status: 200, headers });
  } catch (err: any) {
    console.error("Error serving writing image:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}