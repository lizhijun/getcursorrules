import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ICONS_DIR = path.join(process.cwd(), 'public', 'icons');

async function generateIcons() {
  // 确保目录存在
  await fs.mkdir(ICONS_DIR, { recursive: true });

  // 基础图标 SVG
  const baseIcon = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="64" fill="#0EA5E9"/>
      <text x="256" y="300" font-size="240" font-family="Arial" fill="white" text-anchor="middle">CR</text>
    </svg>
  `;

  // 生成不同尺寸的图标
  const sizes = [16, 32, 192, 512];
  for (const size of sizes) {
    await sharp(Buffer.from(baseIcon))
      .resize(size, size)
      .png()
      .toFile(path.join(ICONS_DIR, `icon-${size}.png`));
  }

  // 生成 Apple 图标
  await sharp(Buffer.from(baseIcon))
    .resize(180, 180)
    .png()
    .toFile(path.join(ICONS_DIR, 'apple-icon-180.png'));

  // 生成 Safari Pinned Tab 图标
  await fs.writeFile(
    path.join(ICONS_DIR, 'safari-pinned-tab.svg'),
    baseIcon
  );

  // 生成 favicon.ico
  await sharp(Buffer.from(baseIcon))
    .resize(32, 32)
    .toFile(path.join(ICONS_DIR, 'favicon.ico'));

  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error); 