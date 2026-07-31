import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://equityalliancevc.com"),
  title:
    "Equity Alliance — Capital Markets Expertise & AI-Powered Investor Growth",
  description:
    "Capital markets expertise, AI-powered investor acquisition, investor awareness, and shareholder communications for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
  openGraph: {
    type: "website",
    siteName: "Equity Alliance",
    title:
      "Equity Alliance — Capital Markets Expertise & AI-Powered Investor Growth",
    description:
      "Capital markets expertise, AI-powered investor acquisition, investor awareness, and shareholder communications for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
    url: "https://equityalliancevc.com/",
    images: ["/assets/investor-meeting.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Equity Alliance — Capital Markets Expertise & AI-Powered Investor Growth",
    description:
      "Capital markets expertise, AI-powered investor acquisition, investor awareness, and shareholder communications for OTCQB, OTCQX, Nasdaq, and growth-stage public companies.",
    images: ["/assets/investor-meeting.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <link rel="stylesheet" href="/assets/site.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
