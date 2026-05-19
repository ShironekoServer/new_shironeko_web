import type { Metadata } from "next";
import Shop from "./shop";

export const metadata: Metadata = {
  title: "Pricing & Products",
  description:
    "Explore ShironekoServer hosting plans, pricing, included resources, and service renewal conditions.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/en/shop",
    title: "Pricing & Products",
    description:
      "Explore ShironekoServer hosting plans, pricing, included resources, and service renewal conditions.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function ShopPage() {
  return <Shop />;
}