import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "AFZ Global Saudi | Premium Digital Solutions",
  description: "Accounting, company formation, web development, apps, social media, AI automation — all under one roof for Saudi Vision 2030.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cormorant.variable} ${jost.variable} ${notoArabic.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}