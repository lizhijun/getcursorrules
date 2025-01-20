import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Category, Rule } from './types';

const RULES_DIR = path.join(process.cwd(), 'rules');

export async function getCategories(): Promise<Category[]> {
  const categories = [
    'Frontend Frameworks and Libraries',
    'Backend and Full-Stack',
    'Mobile Development',
    'CSS and Styling',
    'State Management',
    'Database and API',
    'Testing',
    'Build Tools and Development',
    'Language-Specific',
    'Other'
  ];

  const rules = await getAllRules();
  
  return categories.map(name => ({
    name,
    rules: rules.filter(rule => rule.category === name)
  }));
}

async function getAllRules(): Promise<Rule[]> {
  try {
    const entries = await fs.readdir(RULES_DIR, { withFileTypes: true });
    const rules: Rule[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const rulePath = path.join(RULES_DIR, entry.name);
        const readmePath = path.join(rulePath, 'README.md');
        const cursorrulePath = path.join(rulePath, '.cursorrules');
        
        try {
          // 尝试读取 README.md
          let name = entry.name;
          let description = '';
          let category = 'Other';

          try {
            const readmeContent = await fs.readFile(readmePath, 'utf-8');
            const { data } = matter(readmeContent);
            if (data.title) name = data.title;
            if (data.description) description = data.description;
            if (data.category) category = data.category;
          } catch (readmeError) {
            // 如果没有 README.md 或读取失败，尝试从目录名称推断类别
            const nameParts = entry.name.split('-');
            if (nameParts.length > 0) {
              // 根据目录名称的第一部分来推断类别
              const firstPart = nameParts[0].toLowerCase();
              if (firstPart === 'react' || firstPart === 'vue' || firstPart === 'angular') {
                category = 'Frontend Frameworks and Libraries';
              } else if (firstPart === 'node' || firstPart === 'python' || firstPart === 'java') {
                category = 'Backend and Full-Stack';
              } else if (firstPart === 'flutter' || firstPart === 'react-native') {
                category = 'Mobile Development';
              }
              // 其他类别的推断可以继续添加...
            }
          }

          // 检查 .cursorrules 文件是否存在
          await fs.access(cursorrulePath);
          
          // 格式化显示名称
          name = name
            .replace(/-cursorrules-prompt-file$/, '')
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          rules.push({
            name,
            path: entry.name,
            description,
            category
          });
        } catch (error) {
          console.warn(`Skipping ${entry.name}: ${error.message}`);
        }
      }
    }

    // 按名称排序
    return rules.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Failed to read rules directory:', error);
    return [];
  }
} 