import type { Metadata } from "next";
import Privacy from "./privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn what information ShironekoServer collects, how it is used, payment handling, third-party disclosures, security measures, and contact details.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/privacy",
    title: "Privacy Policy",
    description:
      "Learn what information ShironekoServer collects, how it is used, payment handling, third-party disclosures, security measures, and contact details.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}