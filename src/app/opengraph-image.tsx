import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ADEV STUDIO — Data Science & Neural Interfaces";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F2F0E9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-3px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            ADEVSTUDIO
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(26,26,26,0.5)",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            Data Science → Neural Interfaces
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(26,26,26,0.3)",
              letterSpacing: "6px",
              textTransform: "uppercase",
              display: "flex",
              marginTop: "8px",
              fontFamily: "monospace",
            }}
          >
            EST. 2025
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            color: "rgba(26,26,26,0.2)",
            fontSize: 13,
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          www.adevstudio.com
        </div>
      </div>
    ),
    { ...size }
  );
}
