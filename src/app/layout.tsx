import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
  title: {
    default: "ADEV STUDIO",
    template: "%s | ADEV STUDIO",
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
  authors: [{ name: "ADEV STUDIO" }],
  openGraph: {
    title: "ADEV STUDIO",
    description:
      "Developer & Creative Portfolio showcasing modern web development and design solutions.",
    type: "website",
    url: "https://www.adevstudio.com",
    siteName: "ADEVSTUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEV STUDIO",
    description:
      "Developer & Creative Portfolio showcasing modern web development and design solutions.",
  },
  metadataBase: new URL("https://www.adevstudio.com"),
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
      <body className="antialiased flex flex-col min-h-screen">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLWPJ6R2X8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLWPJ6R2X8');
          `}
        </Script>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  );
}
