import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Clarity } from "@/components/Clarity";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Awesome CursorRules - AI Rules for Cursor Editor",
  description: "A curated collection of .cursorrules files for enhancing your Cursor AI development experience. Find and share rules for popular frameworks and libraries.",
  metadataBase: new URL('https://getcursorrules.com'),
  keywords: [
    'cursor',
    'cursorrules',
    'cursor ai',
    'cursor editor',
    'ai coding',
    'development',
    'programming',
    'code generation',
    'ai assistant',
    'developer tools'
  ],
  openGraph: {
    type: 'website',
    url: 'https://getcursorrules.com',
    title: 'Awesome CursorRules - AI Rules for Cursor Editor',
    description: 'Enhance your Cursor AI experience with curated .cursorrules files. Find rules for popular frameworks and libraries.',
    siteName: 'GetCursorRules',
    images: [{
      url: 'https://getcursorrules.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Awesome CursorRules'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cursorrules',
    creator: '@cursorrules',
    title: 'Awesome CursorRules - AI Rules for Cursor Editor',
    description: 'Enhance your Cursor AI experience with curated .cursorrules files. Find rules for popular frameworks and libraries.',
    images: ['https://getcursorrules.com/og-image.png']
  },
  alternates: {
    canonical: 'https://getcursorrules.com',
    languages: {
      'en-US': 'https://getcursorrules.com',
      'zh-CN': 'https://getcursorrules.com/zh'
    }
  },
  verification: {
    google: 'FKtO0_OPILs8_w8dV6sQ1l0ozWfF6EK_OiA1p0BVBxQ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'Awesome CursorRules Community',
      url: 'https://github.com/awesome-cursorrules',
    }
  ],
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-icon.png' },
      { url: '/icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#0EA5E9',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Awesome CursorRules',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Clarity />
        <GoogleAnalytics />
      </body>
    </html>
  );
} 