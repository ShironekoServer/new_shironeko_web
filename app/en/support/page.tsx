import type { Metadata } from "next";
import Support from "./support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact ShironekoServer for pre-purchase questions, billing inquiries, cancellations, service issues, and refund requests.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/en/support",
    title: "Support",
    description:
      "Contact ShironekoServer for pre-purchase questions, billing inquiries, cancellations, service issues, and refund requests.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function SupportPage() {
  return <Support />;
}