import React, { useState } from 'react';
import { RecipeCard } from './RecipeCard';
import { Sparkles, Filter, ChefHat } from 'lucide-react';

const CATEGORIES = ['All', 'Italian', 'Asian', 'Seafood', 'Breakfast', 'Mexican', 'Dessert', 'Healthy', 'Quick & Easy'];

export function RecipeList({ recipes, onSelectRecipe, favorites, onToggleFavorite, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      recipe.title.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.category.toLowerCase().includes(query) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-amber-500 text-white p-8 sm:p-12 mb-10 shadow-lg">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-cover bg-center hidden lg:block" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80')` }} />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Welcome to MIGGY's Kitchen
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Cook with passion, taste the magic.
          </h1>
          <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
            Explore handcrafted recipes, scale your ingredients on the fly, and follow step-by-step cooking modes tailored for food lovers.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        <div className="flex items-center gap-1.5 text-stone-500 mr-2 text-sm font-medium shrink-0">
          <Filter className="w-4 h-4" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition shrink-0 ${
              selectedCategory === category
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChefHat className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 mb-1">No recipes found</h3>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            We couldn't find any recipes matching your search or filter. Try typing a different keyword or category.
          </p>
        </div>
      )}

    </div>
  );
}
