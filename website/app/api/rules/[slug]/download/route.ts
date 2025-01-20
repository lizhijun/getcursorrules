import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // 获取规则目录的完整路径
    const rulesDir = path.join(process.cwd(), 'rules', params.slug);
    const cursorrulesPath = path.join(rulesDir, '.cursorrules');

    // 读取 .cursorrules 文件内容
    const content = await fs.readFile(cursorrulesPath, 'utf-8');
    
    // 返回文件内容，设置正确的响应头
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${params.slug}.cursorrules"`,
        // 禁用缓存
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error(`Error reading .cursorrules file for ${params.slug}:`, error);
    return new NextResponse('File not found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
} 