'use client';

import Script from 'next/script';

export function GoogleAdsense() {
  return (
    <>
      <meta name="google-adsense-account" content="ca-pub-8592502425550051" />
      <Script
        id="google-adsense"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8592502425550051"
        crossOrigin="anonymous"
      />
    </>
  );
} 