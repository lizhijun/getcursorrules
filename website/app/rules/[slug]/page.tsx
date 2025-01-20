import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@/components/CodeBlock';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getRuleContent(slug: string) {
  try {
    const rulesDir = path.join(process.cwd(), 'rules', slug);
    let readmeContent = '';
    let frontmatter = {};
    let cursorrulesContent = '';

    // 尝试读取 README.md
    try {
      const readmePath = path.join(rulesDir, 'README.md');
      readmeContent = await fs.readFile(readmePath, 'utf-8');
      const parsed = matter(readmeContent);
      readmeContent = parsed.content;
      frontmatter = parsed.data;
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

export default async function RulePage({ params }: PageProps) {
  const content = await getRuleContent(params.slug);
  
  if (!content) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-red-600">Rule not found</h1>
          <p className="mt-4 text-gray-600">
            The requested rule could not be found. Please check the URL and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
          
          {/* README 内容 */}
          <div className="prose prose-lg max-w-none mb-12">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
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
              }}
            >
              {content.readme}
            </ReactMarkdown>
          </div>
          
          {/* .cursorrules 内容 */}
          {content.cursorrules && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">.cursorrules</h2>
              <CodeBlock 
                code={content.cursorrules}
                language="typescript"
                title=".cursorrules"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 