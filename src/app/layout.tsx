import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — High‑Accuracy Drone Mapping, Inspection & Agribot Services (TN)`,
    template: `%s | ${site.name}`,
  },
  description: "DGCA‑compliant drone services in Tamil Nadu: aerial mapping, solar/wind inspections, precision spraying, and drone‑based solar cleaning. 48‑hour delivery, up to 5–10 mm accuracy.",
  keywords: ["drone services", "aerial mapping", "agribot spraying", "solar inspection", "Tamil Nadu", "DGCA compliant", "Chennai"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — High‑Accuracy Drone Services in Tamil Nadu`,
    description: "DGCA‑compliant drone services: aerial mapping, inspections, precision spraying, and solar cleaning. 48‑hour delivery, up to 5–10 mm accuracy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-mist text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
