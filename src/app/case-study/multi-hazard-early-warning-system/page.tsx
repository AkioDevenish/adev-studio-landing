import type { Metadata } from "next";
import MultiHazardCaseStudyContent from "@/components/pages/MultiHazardCaseStudy";

export const metadata: Metadata = {
  title: "Multi-Hazard Early Warning System",
  description:
    "National early warning system for Trinidad & Tobago delivering real-time alerts for floods, earthquakes, tsunamis, and severe weather events.",
  openGraph: {
    title: "Multi-Hazard Early Warning System | ADEV Studio",
    description:
      "National early warning system delivering real-time alerts for natural disasters across Trinidad & Tobago.",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Multi-Hazard Early Warning System",
      },
    ],
  },
};

export default function MultiHazardPage() {
  return <MultiHazardCaseStudyContent />;
}
