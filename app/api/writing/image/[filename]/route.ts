// app/api/writing/image/[filename]/route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMAGES_DIR = path.join(process.cwd(), "content", "writing", "images");

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

export async function GET(
  _req: Request,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = decodeURIComponent(params.filename);

    // Prevent directory traversal
    const resolved = path.normalize(path.join(IMAGES_DIR, filename));
    if (!resolved.startsWith(IMAGES_DIR)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const buffer = fs.readFileSync(resolved);
    const ext = path.extname(resolved);
    const contentType = contentTypeForExtension(ext);

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(buffer, { status: 200, headers });
  } catch (err: any) {
    console.error("Error serving writing image:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
