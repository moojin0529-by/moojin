import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #162f4a, #0c1a28)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, opacity: 0.7, marginBottom: 16 }}>
          {siteConfig.serviceAreas[0]} 시공 전문
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 32, opacity: 0.85 }}>
          {siteConfig.companyName}
        </div>
      </div>
    ),
    { ...size },
  );
}
