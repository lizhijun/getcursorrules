import { getCategories } from '@/lib/categories';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

interface Props {
  params: {
    slug: string;
  }
}

export default async function CategoryPage({ params }: Props) {
  const categories = await getCategories();
  const category = categories.find(
    cat => cat.name.toLowerCase().replace(/ /g, '-') === params.slug
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* 返回链接 */}
        <Link 
          href="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Back to Categories
        </Link>

        {/* 分类标题 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
        </div>

        {/* 规则列表 */}
        <div className="grid gap-6">
          {category.rules.map((rule) => (
            <Link
              key={rule.path}
              href={`/rules/${rule.path}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{rule.name}</h3>
                  {rule.description && (
                    <p className="text-gray-600">{rule.description}</p>
                  )}
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4"
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