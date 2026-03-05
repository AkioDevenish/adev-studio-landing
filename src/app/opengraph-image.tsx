import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ADEV STUDIO — Data Science & Web Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #F2F0E9, rgba(242,240,233,0.3))",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F2F0E9",
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            ADEV STUDIO
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(242,240,233,0.5)",
              letterSpacing: "8px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Data Science → Web Design
          </div>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "rgba(242,240,233,0.3)",
            fontSize: 16,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          www.adevstudio.com
        </div>
      </div>
    ),
    { ...size }
  );
}
