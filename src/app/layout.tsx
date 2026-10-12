import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VisitNotifier } from "@/components/VisitNotifier";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { shortcut: "/assets/img/favicon.ico" },
  appleWebApp: { statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#f5f9fa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-blueish-gray">
        <Header />
        <div className="mx-auto flex-grow px-4 py-8 md:px-12">{children}</div>
        <Footer />
        <Analytics />
        <VisitNotifier />
      </body>
    </html>
  );
}
