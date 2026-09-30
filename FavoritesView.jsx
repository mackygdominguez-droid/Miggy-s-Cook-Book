import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Heart, BookOpen } from 'lucide-react';

export function FavoritesView({ recipes, favorites, onSelectRecipe, onToggleFavorite, setActiveTab }) {
  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900 flex items-center gap-3">
            <Heart className="w-8 h-8 text-rose-500 fill-current" />
            Favorite Recipes
          </h1>
          <p className="text-stone-500 text-sm mt-1">
            Your personal collection of saved culinary masterpieces.
          </p>
        </div>
        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-full">
          {favoriteRecipes.length} Saved
        </span>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelectRecipe}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-stone-300 p-8">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 mb-1">No favorites yet</h3>
          <p className="text-stone-500 text-sm max-w-md mx-auto mb-6">
            Click the heart icon on any recipe card while exploring to save it to your personal favorites collection.
          </p>
          <button
            onClick={() => setActiveTab('explore')}
            className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow transition inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Explore Recipes
          </button>
        </div>
      )}
    </div>
  );
}
