import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VisitNotifier } from "@/components/VisitNotifier";
import { TITLE_TEMPLATE } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { momaSans, mono, serif } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE_TEMPLATE,
  openGraph: { title: TITLE_TEMPLATE },
  twitter: { title: TITLE_TEMPLATE },
  appleWebApp: { statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#f5f9fa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} ${momaSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-blueish-gray">
        <Header />
        <main className="mx-auto flex-grow px-4 py-8 md:px-12">{children}</main>
        <Footer />
        <Analytics />
        <VisitNotifier />
      </body>
    </html>
  );
}
