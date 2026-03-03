import type { Metadata } from "next";
import LumRefilleryContent from "@/components/pages/LumRefillery";

export const metadata: Metadata = {
  title: "Lumë Refillery",
  description:
    "An eco-friendly e-commerce platform for a zero-waste refill store, promoting sustainable living and conscious consumerism.",
  openGraph: {
    title: "Lumë Refillery | ADEV Studio",
    description:
      "E-commerce platform for an eco-friendly refill store offering sustainable, zero-waste products.",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lumë Refillery",
      },
    ],
  },
};

export default function LumRefilleryPage() {
  return <LumRefilleryContent />;
}
