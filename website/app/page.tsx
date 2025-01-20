import { getCategories } from '@/lib/categories';
import { Header } from '@/components/Header';
import { WhySection } from '@/components/WhySection';
import { CategoryList } from '@/components/CategoryList';

export default async function Home() {
  const categories = await getCategories();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhySection />
      <main className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <CategoryList categories={categories} />
        </div>
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            Licensed under{' '}
            <a 
              href="https://creativecommons.org/publicdomain/zero/1.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              CC0
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
} 