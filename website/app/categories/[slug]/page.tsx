import { getCategories } from '@/lib/categories';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  }
}

// 生成动态元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/ /g, '-') === params.slug
  );

  if (!category) {
    return {
      title: 'Category Not Found - Cursor AI Rules',
      description: 'The requested category could not be found.'
    };
  }

  return {
    title: `${category.name} - Cursor AI Rules`,
    description: category.description,
    openGraph: {
      title: `${category.name} - Cursor AI Rules`,
      description: category.description,
      type: 'website',
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const categories = await getCategories();
  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/ /g, '-') === params.slug
  );

  if (!category) {
    notFound();
  }

  // 按名称排序规则
  const sortedRules = [...category.rules].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* 面包屑导航 */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link 
            href="/"
            className="hover:text-blue-500 flex items-center"
          >
            <FiHome className="w-4 h-4 mr-1" />
            Home
          </Link>
          <span>/</span>
          <Link 
            href="/categories"
            className="hover:text-blue-500"
          >
            Categories
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>

        {/* 分类标题和描述 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
          <div className="mt-4 text-sm text-gray-500">
            {sortedRules.length} rules in this category
          </div>
        </div>

        {/* 规则列表 */}
        <div className="grid gap-6">
          {sortedRules.map((rule) => (
            <Link
              key={rule.path}
              href={`/rules/${rule.path}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {rule.name}
                  </h3>
                  {rule.description && (
                    <p className="text-gray-600">{rule.description}</p>
                  )}
                  {/* 添加元数据显示 */}
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                    {rule.lastUpdated && (
                      <span>Updated: {new Date(rule.lastUpdated).toLocaleDateString()}</span>
                    )}
                    {rule.author && (
                      <span>By: {rule.author}</span>
                    )}
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-500 flex-shrink-0 ml-4 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* 返回顶部按钮 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

// 生成静态页面路径
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.name.toLowerCase().replace(/ /g, '-'),
  }));
} 