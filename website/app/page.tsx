import { getCategories } from '@/lib/categories';
import { Header } from '@/components/Header';
import { CategoryList } from '@/components/CategoryList';

export default async function Home() {
  const categories = await getCategories();
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <CategoryList categories={categories} />
        </div>
      </div>
    </main>
  );
} 