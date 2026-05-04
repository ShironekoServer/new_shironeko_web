import { Metadata } from "next";
import Commerce from "./commerce";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "ShironekoServerの特定商取引法に基づく表記。",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/commerce",
    title: "特定商取引法に基づく表記",
    description: "ShironekoServerの特定商取引法に基づく表記。",
    siteName: "ShironekoServer",
    images: [{ url: "https://www.shironekoserver.com/logo.png" }],
  },
};

export default function CommercePage() {
  return <Commerce />;
}
