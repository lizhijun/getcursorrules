'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Rule } from '@/lib/types';
import { SearchBar } from './SearchBar';
import { FiChevronDown } from 'react-icons/fi';

interface RuleListProps {
  rules: Rule[];
}

type SortOption = {
  label: string;
  value: keyof Rule | 'lastUpdated';
  direction: 'asc' | 'desc';
};

const sortOptions: SortOption[] = [
  { label: 'Name (A-Z)', value: 'name', direction: 'asc' },
  { label: 'Name (Z-A)', value: 'name', direction: 'desc' },
  { label: 'Latest Update', value: 'lastUpdated', direction: 'desc' },
  { label: 'Oldest Update', value: 'lastUpdated', direction: 'asc' },
];

export function RuleList({ rules }: RuleListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);

  // 过滤规则
  const filteredRules = rules.filter(rule => {
    const searchLower = searchQuery.toLowerCase();
    return (
      rule.name.toLowerCase().includes(searchLower) ||
      rule.description?.toLowerCase().includes(searchLower) ||
      rule.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  // 排序规则
  const sortedRules = [...filteredRules].sort((a, b) => {
    if (sortOption.value === 'lastUpdated') {
      const dateA = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0;
      const dateB = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0;
      return sortOption.direction === 'asc' ? dateA - dateB : dateB - dateA;
    }
    
    const valueA = (a[sortOption.value] || '').toString().toLowerCase();
    const valueB = (b[sortOption.value] || '').toString().toLowerCase();
    return sortOption.direction === 'asc'
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });

  return (
    <div className="space-y-6">
      {/* 搜索和排序区域 */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-full">
            <SearchBar 
              onSearch={setSearchQuery}
              placeholder="Search rules by name, description, or keywords..."
            />
          </div>
          <div className="relative min-w-[200px]">
            <select
              value={`${sortOption.value}-${sortOption.direction}`}
              onChange={(e) => {
                const [value, direction] = e.target.value.split('-');
                const newOption = sortOptions.find(
                  opt => opt.value === value && opt.direction === direction
                );
                if (newOption) setSortOption(newOption);
              }}
              className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white transition-all duration-200"
            >
              {sortOptions.map((option) => (
                <option 
                  key={`${option.value}-${option.direction}`}
                  value={`${option.value}-${option.direction}`}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        {/* 搜索结果计数 */}
        <div className="text-center text-sm text-gray-500">
          {searchQuery && (
            <p>Found {filteredRules.length} rules</p>
          )}
        </div>
      </div>

      {/* 规则列表 */}
      <div className="space-y-4">
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
                  <p className="text-gray-600 mb-3">{rule.description}</p>
                )}
                {/* 规则元数据 */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {rule.lastUpdated && (
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Updated:</span>
                      {new Date(rule.lastUpdated).toLocaleDateString()}
                    </div>
                  )}
                  {rule.author && (
                    <div className="flex items-center">
                      <span className="font-medium mr-2">By:</span>
                      {rule.author}
                    </div>
                  )}
                  {rule.keywords && rule.keywords.length > 0 && (
                    <div className="flex items-center flex-wrap gap-2">
                      {rule.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="px-2 py-1 bg-gray-100 rounded-full text-gray-600 text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-blue-500 flex-shrink-0 ml-4"
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

        {/* 无结果提示 */}
        {sortedRules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No rules found matching your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 