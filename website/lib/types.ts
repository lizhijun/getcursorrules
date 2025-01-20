export interface Rule {
  name: string;
  path: string;
  description?: string;
}

export interface Category {
  name: string;
  rules: Rule[];
} 