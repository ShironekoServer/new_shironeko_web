import type { Metadata } from "next";
import Base from "./base";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShironekoServer",
  description: "Discordボットに使えるサーバー環境を提供しています。価格は0円〜",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/",
    title: "トップページ",
    description:
      "Discordボットに使えるサーバー環境を提供しています。価格は0円〜",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Base>{children}</Base>;
}
