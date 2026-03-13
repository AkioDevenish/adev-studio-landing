import { ImageResponse } from "next/og";
import { getPostData, getSortedPostsData } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "ADEV STUDIO Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let title = "ADEV STUDIO";
  let category = "";

  try {
    const post = getPostData(slug);
    title = post.title;
    category = post.category || "";
  } catch {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F2F0E9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top: Logo + Category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-0.5px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            ADEVSTUDIO
          </div>
          {category && (
            <div
              style={{
                fontSize: 12,
                color: "rgba(26,26,26,0.5)",
                letterSpacing: "4px",
                textTransform: "uppercase",
                border: "1px solid rgba(26,26,26,0.15)",
                padding: "6px 16px",
                borderRadius: "100px",
                display: "flex",
                fontFamily: "monospace",
              }}
            >
              {category}
            </div>
          )}
        </div>

        {/* Center: Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 50 ? 44 : 58,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              maxWidth: "950px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "rgba(26,26,26,0.2)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "flex",
              fontFamily: "monospace",
            }}
          >
            www.adevstudio.com
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(26,26,26,0.3)",
              letterSpacing: "2px",
              display: "flex",
              fontFamily: "monospace",
            }}
          >
            Read article →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
