import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.blankcollar.com";
const TITLE = "blankcollar — definition";
const DESCRIPTION =
  "blankcollar (n.) A worker of the post-AI era who operates as a generalist empowered by AI, delegating routine execution to machines — often functioning as a one-person company. The third era of labor after blue collar and white collar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "blank collar",
    "blankcollar",
    "blank-collar worker",
    "future of work",
    "AI generalist",
    "one-person company",
    "Kristian Kabashi",
    "The Blank Collar Equation",
    "work is for bots",
  ],
  authors: [{ name: "Kristian Kabashi" }],
  creator: "Kristian Kabashi",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "blankcollar.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@kristiankabashi",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,300;0,600;0,800;1,300;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              name: "blankcollar",
              alternateName: ["blank collar", "blank-collar worker"],
              description:
                "A worker of the post-AI era who operates as a generalist empowered by artificial intelligence, delegating routine execution to machines in order to concentrate on creativity, judgment, empathy, and strategy — often functioning as a one-person company.",
              inDefinedTermSet: {
                "@type": "DefinedTermSet",
                name: "The Blank Collar Equation",
                url: SITE_URL,
              },
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
