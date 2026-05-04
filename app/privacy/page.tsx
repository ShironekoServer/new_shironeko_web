import { Metadata } from "next";
import Privacy from "./privacy";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ShironekoServerのプライバシーポリシー。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "プライバシーポリシー",
    description: "ShironekoServerのプライバシーポリシー。",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
