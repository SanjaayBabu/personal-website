// app/api/writing/route.ts
import { NextResponse } from "next/server";
import { getAllPostsMeta } from "@/lib/writing";

export async function GET() {
  try {
    const posts = getAllPostsMeta();
    return NextResponse.json(posts);
  } catch (err) {
    console.error("Failed to list posts:", err);
    return NextResponse.json({ error: "Failed to list posts" }, { status: 500 });
  }
}