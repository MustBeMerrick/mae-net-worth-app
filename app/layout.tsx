import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Celebration } from "@/components/Celebration";
import { ToastProvider } from "@/components/ToastProvider";
import { FEATURES } from "@/lib/features";
import "./globals.css";

const navItems = [
  { href: "/", label: "Dashboard", show: true },
  { href: "/contributions", label: "Contributions", show: true },
  { href: "/annual-returns", label: "Annual Returns", show: FEATURES.annualReturnsPage },
  { href: "/charts", label: "Charts", show: FEATURES.chartsPage }
].filter((item) => item.show);

export const metadata: Metadata = {
  title: "Net Worth",
  description: "Private net worth dashboard",
  applicationName: "Net Worth",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#fffbf0",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <aside className="sidebar" aria-label="Primary navigation">
            <Link href="/" className="brand" aria-label="Net Worth dashboard">
              <span className="brand-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon-512.png" alt="" width={44} height={44} />
              </span>
              <span>
                <strong>Net Worth</strong>
                <small>Private ledger</small>
              </span>
            </Link>
            <nav className="nav-list">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <ToastProvider>
            <main className="main-content">{children}</main>
            <Suspense fallback={null}>
              <Celebration />
            </Suspense>
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}
