import type { Metadata } from "next";
import Support from "./support";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ShironekoServerの購入前相談、請求、解約、障害、返金相談の窓口です。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/support",
    title: "お問い合わせ",
    description:
      "ShironekoServerの購入前相談、請求、解約、障害、返金相談の窓口です。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function SupportPage() {
  return <Support />;
}
