import { Metadata } from "next";
import Support from "./support";

export const metadata: Metadata = {
  title: "サポート",
  description: "ShironekoServerのサポートページ。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "サポート",
    description: "ShironekoServerのサポートページ。",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function SupportPage() {
  return <Support />;
}
