import type { Metadata } from "next";
import Base from "./base";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShironekoServer",
  description: "Discordボットに使えるサーバー環境を提供しています。価格は0円〜",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Base>{children}</Base>;
}
