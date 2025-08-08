import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory?: string;
  onCategorySelect: (categorySlug: string | null) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory, 
  onCategorySelect 
}) => {
  return (
    <nav className="mb-8" aria-label="Game categories">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            !activeCategory 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
          }`}
          aria-pressed={!activeCategory}
        >
          All Games ({categories.reduce((sum, cat) => sum + cat.gameCount, 0)})
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.slug
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name} ({category.gameCount})
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;