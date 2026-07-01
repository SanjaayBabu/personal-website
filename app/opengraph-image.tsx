import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.03em" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#a1a1aa" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
