import type { Metadata } from "next";
import Base from "./base";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shironekoserver.com"),
  title: {
    default: "ShironekoServer",
    template: "%s | ShironekoServer",
  },
  description:
    "ShironekoServerは、Discord Botや小規模アプリケーション向けのホスティング環境を月額で提供するサービスです。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/",
    title: "ShironekoServer",
    description:
      "Discord Botや小規模アプリケーション向けのホスティング環境を月額で提供するサービスです。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Base>{children}</Base>;
}
