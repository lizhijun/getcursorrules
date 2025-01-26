import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

export async function GET() {
  try {
    const sitemapData = await sitemap();
    return NextResponse.json(sitemapData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate sitemap' },
      { status: 500 }
    );
  }
} 