import Script from "next/script";
import { Allerta_Stencil, Spectral, JetBrains_Mono } from "next/font/google";
import ClickSoundListener from "@/components/ui/ClickSoundListener";
import { SITE_URL } from "@/lib/contact";
import "./globals.css";

// Display / wordmark — stencil headings (single weight).
const allertaStencil = Allerta_Stencil({
  variable: "--font-allerta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Body + card/article titles.
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// "System" texture — nav, tags, meta, buttons.
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Makes OG/social image URLs absolute in production (required by crawlers).
  metadataBase: new URL(SITE_URL),
  title: "Naveena Pius",
  description: "Software engineer, rider, and writer.",
  // Site-wide OG fields only — og:title/og:description fall back to each
  // page's own title/description, and app/opengraph-image.png supplies the
  // shared og:image, so pages don't need their own openGraph blocks.
  openGraph: {
    siteName: "Naveena Pius",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${allertaStencil.variable} ${spectral.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ClickSoundListener />
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d2889fd6-8747-40cc-89a1-fdcf07e0ecda"
        />
      </body>
    </html>
  );
}
