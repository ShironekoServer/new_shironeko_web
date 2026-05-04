import type { Metadata } from "next";
import Privacy from "./privacy";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ShironekoServerが取得する情報、利用目的、決済情報、第三者提供、安全管理、問い合わせ窓口を掲載しています。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/privacy",
    title: "プライバシーポリシー",
    description:
      "ShironekoServerが取得する情報、利用目的、決済情報、第三者提供、安全管理、問い合わせ窓口を掲載しています。",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
