import { getCategories } from '@/lib/categories';
import { MetadataRoute } from 'next';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://getcursorrules.com';
  const categories = await getCategories();
  const currentDate = new Date();

  // 基础页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: currentDate,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.8,
    },
  ];

  // 分类页面
  const categoryPages = categories.map((category) => {
    const latestRuleUpdate = category.rules.reduce((latest, rule) => {
      const ruleDate = rule.lastUpdated ? new Date(rule.lastUpdated) : currentDate;
      return ruleDate > latest ? ruleDate : latest;
    }, new Date(0));

    const slug = category.name.toLowerCase().replace(/ /g, '-');
    return {
      url: `${baseUrl}/categories/${slug}`,
      lastModified: latestRuleUpdate,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.8,
    };
  });

  // 规则页面
  const rulePages = categories.flatMap((category) =>
    category.rules.map((rule) => ({
      url: `${baseUrl}/rules/${rule.path}`,
      lastModified: rule.lastUpdated ? new Date(rule.lastUpdated) : currentDate,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.7,
    }))
  );

  // API 和资源页面
  const resourcePages = [
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: currentDate,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.4,
    },
  ];

  return [...staticPages, ...categoryPages, ...rulePages, ...resourcePages]
    .map(page => ({
      ...page,
      // 确保所有日期都是 ISO 格式的字符串
      lastModified: page.lastModified.toISOString(),
    }))
    .sort((a, b) => b.priority - a.priority); // 按优先级排序
} 