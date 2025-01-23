import { getCategories } from '@/lib/categories';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await getCategories();
  const baseUrl = 'https://getcursorrules.com';

  const rssItems = categories.flatMap(category =>
    category.rules.map(rule => `
      <item>
        <title><![CDATA[${rule.name}]]></title>
        <link>${baseUrl}/rules/${rule.path}</link>
        <guid>${baseUrl}/rules/${rule.path}</guid>
        <description><![CDATA[${rule.description || ''}]]></description>
        <category>${category.name}</category>
        ${rule.lastUpdated ? `<pubDate>${new Date(rule.lastUpdated).toUTCString()}</pubDate>` : ''}
      </item>
    `)
  ).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Awesome CursorRules</title>
        <link>${baseUrl}</link>
        <description>A curated collection of .cursorrules files for enhancing your Cursor AI development experience.</description>
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        ${rssItems}
      </channel>
    </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
} 