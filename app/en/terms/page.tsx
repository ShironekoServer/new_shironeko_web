import type { Metadata } from "next";
import Terms from "./terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "These are the Terms of Service for ShironekoServer, covering service details, fees, cancellation, prohibited activities, disclaimers and the handling of personal information.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/terms",
    title: "利用規約",
    description:
      "These are the Terms of Service for ShironekoServer, covering service details, fees, cancellation, prohibited activities, disclaimers and the handling of personal information.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function TermsPage() {
  return <Terms />;
}