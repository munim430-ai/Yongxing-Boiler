import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yongxing Boiler Bangladesh — ISO Certified Industrial Boilers",
  description:
    "Yongxing Boiler Bangladesh — 20-30% below premium brands, ISO certified, exported to 50+ countries. Complete Bangladesh registration docs included. Local service in Gazipur.",
  keywords: [
    "Yongxing Boiler Bangladesh",
    "Best value boiler Bangladesh",
    "ISO certified boiler Bangladesh",
    "Boiler supplier Gazipur",
    "Industrial boiler Bangladesh price",
    "Biomass boiler conversion Bangladesh",
    "RMG factory boiler supplier",
    "Boiler import agent Bangladesh",
    "TDF loan boiler",
    "Boiler compliance Bangladesh",
  ],
  openGraph: {
    title: "Yongxing Boiler Bangladesh — Smart Choice for Bangladesh Industry",
    description:
      "20-30% Below Premium Brands. ISO Certified. 50+ Countries Served. Complete Bangladesh Registration Docs Included.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
