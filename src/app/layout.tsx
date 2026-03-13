import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ChatBubble from "@/components/ChatBubble";
import PromoBanner from "@/components/PromoBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ADEV STUDIO",
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
    title: "ADEV STUDIO",
    description:
      "Premium web development, data science, and design solutions for ambitious brands.",
    type: "website",
    url: "https://www.adevstudio.com",
    siteName: "ADEV STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADEV STUDIO",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2C2C2C" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-foreground focus:text-background focus:rounded-full focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>

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

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ADEV Studio",
              url: "https://www.adevstudio.com",
              logo: "https://www.adevstudio.com/logos/site_avatar_dark.png",
              description: "Premium web development, data science, and design solutions for ambitious brands.",
              founder: {
                "@type": "Person",
                name: "Akio Devenish",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "TT",
                addressLocality: "Trinidad and Tobago",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@adevstudio.com",
                telephone: "+1-868-469-5973",
                contactType: "customer service",
              },
              sameAs: [
                "https://x.com/Helloadevstudio",
                "https://www.youtube.com/@AkioandTen",
                "https://www.linkedin.com/in/akio-devenish-832476282/",
              ],
            }),
          }}
        />

        <Header />
        <main id="main-content" className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <ChatBubble />
        </Suspense>
        <Suspense fallback={null}>
          <PromoBanner />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
