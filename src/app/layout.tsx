import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollProgressBar } from "@/components/ScrollProgressBar/ScrollProgressBar";
import { CursorGlow } from "@/components/CursorGlow/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Manuel Rodriguez — Software Engineering Expert",
  description:
    "Software Engineering Expert (Tech Lead) specializing in React and React Native — building and scaling mobile applications with a focus on performance, reliability and real-world impact.",
  openGraph: {
    title: "Manuel Rodriguez — Software Engineering Expert",
    description:
      "Software Engineering Expert (Tech Lead) specializing in React and React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>
          <CursorGlow />
          <ScrollProgressBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
