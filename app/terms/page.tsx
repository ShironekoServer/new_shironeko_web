import { Metadata } from "next";
import Terms from "./terms";

export const metadata: Metadata = {
  title: "利用規約",
  description: "ShironekoServerの利用規約。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "利用規約",
    description: "ShironekoServerの利用規約。",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function TermsPage() {
  return <Terms />;
}
