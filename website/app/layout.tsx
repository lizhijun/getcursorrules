import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Clarity } from "@/components/Clarity";

export const metadata: Metadata = {
  title: "Awesome CursorRules",
  description: "A curated list of awesome .cursorrules files for enhancing your Cursor AI experience",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
} 