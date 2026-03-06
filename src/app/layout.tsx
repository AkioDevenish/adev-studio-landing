import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
  title: {
    default: "ADEV STUDIO — Digital Agency",
    template: "%s | ADEV STUDIO",
  },
  description:
    "ADEV Studio is a premium digital agency specializing in web development, data science, UI/UX design, and 3D interactive experiences. Based in Trinidad & Tobago.",
  keywords: [
    "digital agency",
    "web development",
    "web design",
    "data science",
    "UI/UX design",
    "ADEV Studio",
    "Trinidad and Tobago",
    "Next.js",
    "React",
    "Three.js",
  ],
  authors: [{ name: "ADEV STUDIO" }],
  openGraph: {
    title: "ADEV STUDIO — Digital Agency",
    description:
      "Premium web development, data science, and design solutions for ambitious brands.",
    type: "website",
    url: "https://www.adevstudio.com",
    siteName: "ADEV STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEV STUDIO — Digital Agency",
    description:
      "Premium web development, data science, and design solutions for ambitious brands.",
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
