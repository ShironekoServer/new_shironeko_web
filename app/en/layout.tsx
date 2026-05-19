import type { Metadata } from "next";
import Base from "../base";

export const metadata: Metadata = {
  title: {
    default: "ShironekoServer",
    template: "%s | ShironekoServer",
  },
  description:
    "ShironekoServer provides hosting for Discord bots, small-scale applications, and lightweight services.",
  openGraph: {
    type: "website",
    url: "https://www.shironekoserver.com/en",
    title: "ShironekoServer",
    description:
      "Hosting for Discord bots, small-scale applications, and lightweight services.",
    siteName: "ShironekoServer",
    images: [{ url: "/logo.png" }],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Base lang="en">{children}</Base>;
}