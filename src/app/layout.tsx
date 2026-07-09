import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrés Felipe Céspedes — Full-Stack Developer & AI Chatbot Builder",
  description:
    "Full-stack developer from Bogotá, Colombia. I build web apps and AI chatbots with Next.js, React, and OpenAI/Claude/Gemini. Available for freelance projects.",
  metadataBase: new URL("https://andresfelipe.dev"),
  openGraph: {
    title: "Andrés Felipe Céspedes — Full-Stack Developer & AI Chatbot Builder",
    description:
      "Full-stack developer from Bogotá, Colombia. I build web apps and AI chatbots with Next.js, React, and OpenAI/Claude/Gemini.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${ibmPlexSans.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
