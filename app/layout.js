import { Allerta_Stencil, Spectral, JetBrains_Mono } from "next/font/google";
import ClickSoundListener from "@/components/ui/ClickSoundListener";
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
  title: "Naveena Pius",
  description: "Software engineer, rider, and writer.",
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
      </body>
    </html>
  );
}
