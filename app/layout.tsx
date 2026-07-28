import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileDock } from "@/components/MobileDock";
import { SiteScrollEffects } from "@/components/SiteScrollEffects";
import { SITE } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Fire-rated Door Manufacturer in UAE | Niagra",
    template: "%s | Niagra",
  },
  description:
    "Niagra International Wood Industry LLC is a trusted fire-rated door manufacturer in UAE with nearly 30 years of experience — wooden fire doors, acoustic doors, and interior joinery.",
  keywords: [
    "fire rated doors UAE",
    "fire door manufacturer Dubai",
    "acoustic doors UAE",
    "wooden fire doors Sharjah",
    "interior joinery UAE",
    "Niagra",
  ],
  openGraph: {
    title: "Niagra International Wood Industry LLC",
    description:
      "Crafting excellence in wood — fire-rated doors, acoustic doors, and interior fit-out across the UAE.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ivory text-charcoal">
        <SiteScrollEffects />
        <Header />
        <main className="flex-1 pt-[5.5rem] md:pt-[7.5rem]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileDock />
      </body>
    </html>
  );
}
