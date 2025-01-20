export interface Rule {
  name: string;
  path: string;
  description?: string;
  keywords?: string[];
  category?: string;
  lastUpdated?: string;
  author?: string;
  githubUrl?: string;
}

export interface Category {
  name: string;
  description: string;
  rules: Rule[];
  slug?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
} 