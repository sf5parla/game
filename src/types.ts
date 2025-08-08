export interface Game {
  id: string;
  name: string;
  size: string;
  stars: string;
  downloads: string;
  reviews: string;
  image: string;
  description: string;
  features: string[];
  category: string;
  slug: string;
  tags: string[];
  releaseDate: string;
  developer: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  gameCount: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}