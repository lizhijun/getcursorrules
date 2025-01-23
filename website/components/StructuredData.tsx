'use client';

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Awesome CursorRules",
    "url": "https://getcursorrules.com",
    "description": "A curated collection of .cursorrules files for enhancing your Cursor AI development experience.",
    "keywords": "cursor, cursorrules, ai coding, development tools, code generation",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://getcursorrules.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Awesome CursorRules",
    "url": "https://getcursorrules.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://getcursorrules.com/icons/icon-512.png",
      "width": "512",
      "height": "512"
    },
    "sameAs": [
      "https://github.com/PatrickJS/awesome-cursorrules",
      "https://twitter.com/zhijunli"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hi@jiehuo.ai",
      "contactType": "customer service"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CursorRules",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "downloadUrl": "https://getcursorrules.com",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Custom AI rules for specific frameworks",
      "Project-specific code generation",
      "Enhanced code understanding",
      "Framework-specific best practices"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://getcursorrules.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Categories",
        "item": "https://getcursorrules.com/#categories"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a .cursorrules file?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A .cursorrules file is a configuration file that provides context and guidelines to Cursor AI about your project. It helps the AI better understand your codebase, coding standards, and project-specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Where should I place the .cursorrules file?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Place the .cursorrules file in the root directory of your project. Cursor AI will automatically detect and use it to enhance its understanding of your project context."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
} 