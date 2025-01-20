import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const filePath = path.join(process.cwd(), 'rules', params.slug, '.cursorrules');
    const content = await fs.readFile(filePath, 'utf-8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="${params.slug}.cursorrules"`,
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
} 