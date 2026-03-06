// app/api/projects/image/route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const IMAGES_DIR = path.join(process.cwd(), "content", "projects", "images");

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
    const imgParam = url.searchParams.get("img");

    if (!imgParam) {
      return NextResponse.json({ error: "Missing img query" }, { status: 400 });
    }

    const decoded = decodeURIComponent(imgParam);
    const resolved = path.normalize(path.join(IMAGES_DIR, decoded));

    // Path traversal guard
    if (!resolved.startsWith(IMAGES_DIR)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const buffer = fs.readFileSync(resolved);
    const ext = path.extname(resolved);
    const headers = new Headers();
    headers.set("Content-Type", contentTypeForExtension(ext));
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(buffer, { status: 200, headers });
  } catch (err: any) {
    console.error("Error serving project image:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
