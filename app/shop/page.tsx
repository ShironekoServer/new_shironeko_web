import { Metadata } from "next";
import Shop from "./shop";

export const metadata: Metadata = {
  title: "ショップ",
  description: "ShironekoServerのショップ。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "ショップ",
    description: "ShironekoServerのショップ。",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function ShopPage() {
  return <Shop />;
}
