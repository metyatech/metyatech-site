import type { Metadata } from "next";
import { Noto_Sans_JP, Sora } from "next/font/google";
import "./globals.css";

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Noto_Sans_JP({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metyatech.com"),
  title: {
    default: "metyatech",
    template: "%s | metyatech",
  },
  description:
    "metyatech builds practical software products, including Meal Autopilot for AI-powered meal planning and pantry tracking.",
  openGraph: {
    title: "metyatech",
    description:
      "Practical software products from metyatech, including Meal Autopilot for AI-powered meal planning and pantry tracking.",
    url: "https://metyatech.com",
    siteName: "metyatech",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://metyatech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
