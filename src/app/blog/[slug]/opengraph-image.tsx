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
  let date = "";

  try {
    const post = getPostData(slug);
    title = post.title;
    category = post.category || "";
    date = post.date;
  } catch (e) {
    // fallback to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Grid */}
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

        {/* Top accent */}
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

        {/* Top section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#F2F0E9",
              letterSpacing: "-0.5px",
              display: "flex",
            }}
          >
            ADEV STUDIO
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {category && (
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(242,240,233,0.6)",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(242,240,233,0.15)",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  display: "flex",
                }}
              >
                {category}
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 50 ? 42 : 56,
              fontWeight: 700,
              color: "#F2F0E9",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              maxWidth: "900px",
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "rgba(242,240,233,0.3)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            www.adevstudio.com
          </div>
          {date && (
            <div
              style={{
                fontSize: 14,
                color: "rgba(242,240,233,0.3)",
                letterSpacing: "2px",
                display: "flex",
              }}
            >
              {date}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
