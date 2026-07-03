import { Allerta_Stencil, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display / wordmark — stencil headings (single weight).
const allertaStencil = Allerta_Stencil({
  variable: "--font-allerta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Body + card/article titles.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// "System" texture — nav, tags, meta, buttons.
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Naveena Pius",
  description: "Software engineer, rider, and writer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${allertaStencil.variable} ${geistMono.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
