'use client';

import { Category } from '@/lib/types';
import { SearchBar } from './SearchBar';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  onSearch: (query: string) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onCategorySelect,
  onSearch,
}: CategoryFiltersProps) {
  return (
    <div className="space-y-6">
      <SearchBar onSearch={onSearch} />
      
      {/* 分类过滤器 */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${!selectedCategory 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => onCategorySelect(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${selectedCategory === category.name 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
} 