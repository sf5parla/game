import { Game, Category } from '../types';

export const generateGameSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

export const generateCategorySlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export const generateMetaDescription = (game: Game): string => {
  return `Download ${game.name} MOD APK for free! Get unlimited features, ${game.features.slice(0, 2).join(', ')} and more. ${game.downloads}+ downloads. Install now!`;
};

export const generateAnchorText = (game: Game, variation: 'default' | 'download' | 'features' | 'category' = 'default'): string => {
  switch (variation) {
    case 'download':
      return `Download ${game.name} MOD APK`;
    case 'features':
      return `${game.name} with ${game.features[0]}`;
    case 'category':
      return `${game.name} ${game.category} Game`;
    default:
      return game.name;
  }
};

export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://freemodgames.com';
  return `${baseUrl}${path}`;
};

export const generateStructuredData = (game: Game) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": game.name,
    "description": game.description.replace(/\*\*(.*?)\*\*/g, '$1'),
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": game.stars,
      "ratingCount": game.reviews.replace(/[^\d.]/g, '') + "000"
    },
    "downloadUrl": `https://freemodgames.com/download/${game.slug}`,
    "fileSize": game.size,
    "datePublished": game.releaseDate,
    "publisher": {
      "@type": "Organization",
      "name": "Free MOD Games"
    }
  };
};