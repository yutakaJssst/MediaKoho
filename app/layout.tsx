import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://cst-circular-web.matsulab2.chatgpt.site";
const title = "理工サーキュラー｜日大理工の知と人を読む";
const description =
  "日本大学理工学部の研究、学生、キャンパスの今を、ウェブで読みやすく届ける理工サーキュラー。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: `${siteUrl}/brand/cst-sphere.png`,
    shortcut: `${siteUrl}/brand/cst-sphere.png`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
    siteName: "理工サーキュラー",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "理工サーキュラー WEB EDITION",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
