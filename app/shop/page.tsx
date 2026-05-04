import type { Metadata } from "next";
import Shop from "./shop";

export const metadata: Metadata = {
  title: "料金・商品",
  description:
    "ShironekoServerの月額ホスティングプラン、税込価格、提供内容、更新条件を掲載しています。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/shop",
    title: "料金・商品",
    description:
      "ShironekoServerの月額ホスティングプラン、税込価格、提供内容、更新条件を掲載しています。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function ShopPage() {
  return <Shop />;
}
