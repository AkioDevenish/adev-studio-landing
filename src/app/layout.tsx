import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ADEV Studio - Portfolio",
    template: "%s | ADEV Studio",
  },
  description:
    "ADEV Studio - Developer & Creative Portfolio showcasing modern web development, design, and digital solutions.",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "creative",
    "design",
    "ADEV Studio",
    "data science",
    "neural interfaces",
  ],
  authors: [{ name: "ADEV Studio" }],
  openGraph: {
    title: "ADEV Studio - Portfolio",
    description:
      "Developer & Creative Portfolio showcasing modern web development and design solutions.",
    type: "website",
    url: "https://adevstudio.com",
    siteName: "ADEV Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEV Studio - Portfolio",
    description:
      "Developer & Creative Portfolio showcasing modern web development and design solutions.",
  },
  metadataBase: new URL("https://adevstudio.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
