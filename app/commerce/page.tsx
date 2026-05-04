import type { Metadata } from "next";
import Commerce from "./commerce";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "ShironekoServerの販売事業者、連絡先、販売価格、支払方法、提供時期、返金、解約条件を掲載しています。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "特定商取引法に基づく表記",
    description:
      "ShironekoServerの販売事業者、連絡先、販売価格、支払方法、提供時期、返金、解約条件を掲載しています。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function CommercePage() {
  return <Commerce />;
}
