import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@/components/CodeBlock';
import { getRuleByPath, getCategoryByRulePath, getCategories } from '@/lib/categories';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiHome, FiDownload, FiGithub } from 'react-icons/fi';
import { Metadata } from 'next';
import { Components } from 'react-markdown';
import { BackToTopButton } from '@/components/BackToTopButton';

interface PageProps {
  params: {
    slug: string;
  };
}

interface Frontmatter {
  title?: string;
  description?: string;
  author?: string;
  lastUpdated?: string;
  keywords?: string[];
  [key: string]: any;
}

async function getRuleContent(slug: string) {
  try {
    const rulesDir = path.join(process.cwd(), 'rules', slug);
    let readmeContent = '';
    let frontmatter: Frontmatter = {};
    let cursorrulesContent = '';

    // 尝试读取 README.md
    try {
      const readmePath = path.join(rulesDir, 'README.md');
      readmeContent = await fs.readFile(readmePath, 'utf-8');
      const parsed = matter(readmeContent);
      readmeContent = parsed.content;
      frontmatter = parsed.data as Frontmatter;
    } catch (error) {
      console.warn(`No README.md found for ${slug}, using default content`);
      readmeContent = `# ${formatTitle(slug)}\n\nNo README content available.`;
    }
    
    // 尝试读取 .cursorrules
    try {
      const cursorrulesPath = path.join(rulesDir, '.cursorrules');
      cursorrulesContent = await fs.readFile(cursorrulesPath, 'utf-8');
    } catch (error) {
      console.warn(`No .cursorrules file found for ${slug}`);
      cursorrulesContent = '// No .cursorrules content available';
    }

    // 格式化标题
    const title = frontmatter.title || formatTitle(slug);

    return {
      title,
      readme: readmeContent,
      cursorrules: cursorrulesContent,
      frontmatter
    };
  } catch (error) {
    console.error(`Failed to get content for ${slug}:`, error);
    return null;
  }
}

// 辅助函数：格式化标题
function formatTitle(slug: string): string {
  return slug
    .replace(/-cursorrules-prompt-file$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const rule = await getRuleByPath(params.slug);
  if (!rule) {
    return {
      title: 'Rule Not Found - Cursor AI Rules',
      description: 'The requested rule could not be found.'
    };
  }

  return {
    title: `${rule.name} - Cursor AI Rules`,
    description: rule.description || `Cursor AI rules for ${rule.name}`,
    openGraph: {
      title: `${rule.name} - Cursor AI Rules`,
      description: rule.description || `Cursor AI rules for ${rule.name}`,
      type: 'article',
    }
  };
}

// 定义代码组件的 props 类型
interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default async function RulePage({ params }: PageProps) {
  const rule = await getRuleByPath(params.slug);
  const category = await getCategoryByRulePath(params.slug);
  const content = await getRuleContent(params.slug);

  if (!rule || !category) {
    notFound();
  }

  // 定义 Markdown 组件
  const components: Components = {
    code: ({ inline, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || '');
      const code = String(children).replace(/\n$/, '');
      
      if (!inline && match) {
        return (
          <CodeBlock
            code={code}
            language={match[1]}
          />
        );
      }
      
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 面包屑导航 */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-500 flex items-center">
            <FiHome className="w-4 h-4 mr-1" />
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-blue-500">
            Categories
          </Link>
          <span>/</span>
          <Link 
            href={`/categories/${category.name.toLowerCase().replace(/ /g, '-')}`}
            className="hover:text-blue-500"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{rule.name}</span>
        </nav>

        {/* 规则标题和元数据 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl font-bold">{rule.name}</h1>
            <div className="flex space-x-4">
              {/* 修改下载按钮链接 */}
              <a
                href={`/api/rules/${params.slug}/download`}
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiDownload className="w-5 h-5 mr-2" />
                Download .cursorrules
              </a>
              {/* GitHub 链接 */}
              {rule.githubUrl && (
                <a
                  href={rule.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <FiGithub className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>

          {/* 规则描述和元数据 */}
          {rule.description && (
            <p className="text-gray-600 text-lg mb-6">{rule.description}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {rule.lastUpdated && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Last Updated:</span>
                {new Date(rule.lastUpdated).toLocaleDateString()}
              </div>
            )}
            {rule.author && (
              <div className="flex items-center">
                <span className="font-medium mr-2">Author:</span>
                {rule.author}
              </div>
            )}
            {rule.keywords && rule.keywords.length > 0 && (
              <div className="flex items-center flex-wrap gap-2">
                <span className="font-medium mr-2">Keywords:</span>
                {rule.keywords.map(keyword => (
                  <span
                    key={keyword}
                    className="px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* README 内容 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Documentation</h2>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown components={components}>
              {content?.readme || ''}
            </ReactMarkdown>
          </div>
        </div>

        {/* .cursorrules 内容预览 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Rule Content Preview</h2>
          <div className="bg-gray-50 rounded-lg overflow-x-auto">
            <CodeBlock
              code={content?.cursorrules || '// No .cursorrules content available'}
              language="typescript"
              title=".cursorrules"
            />
          </div>
        </div>

        {/* 返回顶部按钮 */}
        <BackToTopButton />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.flatMap(category => 
    category.rules.map(rule => ({
      slug: rule.path,
    }))
  );
} 