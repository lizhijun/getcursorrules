import { Category } from '@/lib/types';
import Link from 'next/link';

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="space-y-16">
      {categories
        .filter(category => category.rules.length > 0)
        .map((category) => (
        <section key={category.name} className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.rules.map((rule) => (
              <Link 
                key={rule.path}
                href={`/rules/${rule.path}`}
                className="group p-6 border rounded-lg hover:shadow-md transition-all hover:border-blue-200"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {rule.name}
                </h3>
                {rule.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {rule.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 