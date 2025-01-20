import Link from 'next/link';
import { Category } from '@/lib/types';
import { 
  FiLayout,
  FiServer,
  FiSmartphone,
  FiFeather,
  FiDatabase,
  FiBox,
  FiCode,
  FiTool,
  FiTerminal,
  FiGrid
} from 'react-icons/fi';

// 分类图标映射
const categoryIcons: { [key: string]: React.ComponentType } = {
  "Frontend Frameworks and Libraries": FiLayout,
  "Backend and Full-Stack": FiServer,
  "Mobile Development": FiSmartphone,
  "CSS and Styling": FiFeather,
  "State Management": FiBox,
  "Database and API": FiDatabase,
  "Testing": FiTool,
  "Build Tools and Development": FiCode,
  "Language-Specific": FiTerminal,
  "Other": FiGrid
};

export function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = categoryIcons[category.name] || FiGrid;
        return (
          <div 
            key={category.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {category.description}
              </p>
              <div className="space-y-3">
                {category.rules.slice(0, 3).map((rule) => (
                  <Link
                    key={rule.path}
                    href={`/rules/${rule.path}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800">{rule.name}</span>
                      <svg
                        className="w-4 h-4 ml-2 text-gray-400"
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
              {category.rules.length > 3 && (
                <div className="mt-4 text-center">
                  <Link
                    href={`/categories/${category.name.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                  >
                    View all {category.rules.length} rules
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
} 