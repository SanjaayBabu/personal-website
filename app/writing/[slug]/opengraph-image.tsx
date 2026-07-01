import { ImageResponse } from "next/og";
import { readRawPost } from "@/lib/writing";
import { siteConfig } from "@/lib/site";

export const alt = "Writing by Sanjaay Babu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const raw = readRawPost(slug);
  const meta: any = raw?.meta || {};
  const title = meta.title || slug.replace(/[-_]/g, " ");
  const date = meta.date || "";

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
          {siteConfig.name} · Writing
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
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>{date}</div>
      </div>
    ),
    { ...size }
  );
}
