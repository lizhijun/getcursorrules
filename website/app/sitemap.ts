import { getCategories } from '@/lib/categories';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://getcursorrules.com';
  const categories = await getCategories();

  // 基础页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // 分类页面
  const categoryPages = categories.map((category) => {
    // 获取分类中最新规则的更新时间
    const latestRuleUpdate = category.rules.reduce((latest, rule) => {
      const ruleDate = rule.lastUpdated ? new Date(rule.lastUpdated) : new Date(0);
      return ruleDate > latest ? ruleDate : latest;
    }, new Date(0));

    return {
      url: `${baseUrl}/categories/${category.name.toLowerCase().replace(/ /g, '-')}`,
      lastModified: latestRuleUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // 规则页面
  const rulePages = categories.flatMap((category) =>
    category.rules.map((rule) => ({
      url: `${baseUrl}/rules/${rule.path}`,
      lastModified: rule.lastUpdated ? new Date(rule.lastUpdated) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  // 添加其他重要页面
  const otherPages = [
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...categoryPages, ...rulePages, ...otherPages];
} 