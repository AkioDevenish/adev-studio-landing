import type { Metadata } from "next";
import MetOfficeCaseStudyContent from "@/components/pages/MetOfficeCaseStudy";

export const metadata: Metadata = {
  title: "Met Office Trinidad & Tobago",
  description:
    "A comprehensive weather information portal serving Trinidad & Tobago with real-time meteorological data, interactive forecasts, satellite imagery, and marine conditions.",
  openGraph: {
    title: "Met Office Trinidad & Tobago | ADEV Studio",
    description:
      "Full stack weather information portal with real-time meteorological data for Trinidad & Tobago.",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Met Office Trinidad & Tobago",
      },
    ],
  },
};

export default function MetOfficePage() {
  return <MetOfficeCaseStudyContent />;
}
