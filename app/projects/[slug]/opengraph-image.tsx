import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/lib/site";

export const alt = "Project by Sanjaay Babu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

function readProjectMeta(slug: string): Record<string, any> {
  const dir = path.join(process.cwd(), "content", "projects");
  for (const c of [`${slug}.mdx`, `${slug}.md`]) {
    const p = path.join(dir, c);
    if (fs.existsSync(p)) {
      return matter(fs.readFileSync(p, "utf8")).data || {};
    }
  }
  return {};
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const meta = readProjectMeta(slug);
  const title = meta.title || slug.replace(/[-_]/g, " ");
  const org = meta.org || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa", letterSpacing: "0.02em" }}>
          {siteConfig.name} · Project
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 60 : 76,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>{org}</div>
      </div>
    ),
    { ...size }
  );
}
