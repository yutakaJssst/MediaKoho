import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "https://www.cst.nihon-u.ac.jp";
  const title = "理工サーキュラー｜日大理工の知と人を読む";
  const description =
    "日本大学理工学部の研究、学生、キャンパスの今を、ウェブで読みやすく届ける理工サーキュラー。";

  return {
    title,
    description,
    icons: {
      icon: "/brand/cst-sphere.png",
      shortcut: "/brand/cst-sphere.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ja_JP",
      siteName: "理工サーキュラー",
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

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
