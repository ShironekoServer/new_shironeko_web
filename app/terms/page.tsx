import type { Metadata } from "next";
import Terms from "./terms";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "ShironekoServerのサービス内容、料金、解約、禁止事項、免責、個人情報の取り扱いに関する利用規約です。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/terms",
    title: "利用規約",
    description:
      "ShironekoServerのサービス内容、料金、解約、禁止事項、免責、個人情報の取り扱いに関する利用規約です。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function TermsPage() {
  return <Terms />;
}
