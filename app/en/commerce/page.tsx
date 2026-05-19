import type { Metadata } from "next";
import Commerce from "./commerce";

export const metadata: Metadata = {
  title: "Commercial Transactions Act Disclosure",
  description:
    "View ShironekoServer business information, contact details, pricing, payment methods, service availability, refund policy, and cancellation terms.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/en/commerce",
    title: "Commercial Transactions Act Disclosure",
    description:
      "View ShironekoServer business information, contact details, pricing, payment methods, service availability, refund policy, and cancellation terms.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function CommercePage() {
  return <Commerce />;
}