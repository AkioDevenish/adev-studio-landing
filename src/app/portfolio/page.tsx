import { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the portfolio of Akio Devenish — web developer, data scientist, and founder of ADEV Studio. Projects spanning weather platforms, e-commerce, and emergency systems.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
