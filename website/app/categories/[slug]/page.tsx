import { getCategories } from '@/lib/categories';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Metadata } from 'next';
import { RuleList } from '@/components/RuleList';

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
    description: category.description || `Cursor AI rules for ${category.name}`,
    openGraph: {
      title: `${category.name} - Cursor AI Rules`,
      description: category.description || `Cursor AI rules for ${category.name}`,
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
          <Link href="/#categories" className="hover:text-blue-500">
            Categories
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>

        {/* 分类标题和描述 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{category.description}</p>
          <div className="text-sm text-gray-500">
            {category.rules.length} rules in this category
          </div>
        </div>

        {/* 规则列表 */}
        <RuleList rules={category.rules} />

        {/* 返回首页按钮 */}
        <div className="mt-8 text-center">
          <Link
            href="/#categories"
            className="inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <FiArrowLeft className="mr-2" />
            Back to Categories
          </Link>
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