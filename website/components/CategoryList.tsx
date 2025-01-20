import { Category } from '@/lib/types';
import Link from 'next/link';

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="space-y-12">
      {categories
        .filter(category => category.rules.length > 0)
        .map((category) => (
        <section key={category.name} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.rules.map((rule) => (
              <Link 
                key={rule.path}
                href={`/rules/${rule.path}`}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{rule.name}</h3>
                {rule.description && (
                  <p className="mt-2 text-sm text-gray-600">{rule.description}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 