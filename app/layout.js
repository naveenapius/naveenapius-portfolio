import { Allerta_Stencil, Cantarell, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display / wordmark — stencil headings (single weight).
const allertaStencil = Allerta_Stencil({
  variable: "--font-allerta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Body + card/article titles.
const cantarell = Cantarell({
  variable: "--font-cantarell",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${allertaStencil.variable} ${cantarell.variable} ${jetBrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
