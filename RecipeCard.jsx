import React from 'react';
import { Clock, Users, Heart, Star } from 'lucide-react';

export function RecipeCard({ recipe, onSelect, isFavorite, onToggleFavorite }) {
  return (
    <div 
      onClick={() => onSelect(recipe)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-pointer flex flex-col"
    >
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <img 
          src={recipe.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80'}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80" />
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition shadow-md ${
            isFavorite 
              ? 'bg-rose-500 text-white' 
              : 'bg-white/80 text-stone-700 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-md text-stone-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {recipe.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-stone-900/40 backdrop-blur-md px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              {recipe.cookTime || recipe.prepTime}
            </span>
            <span className="flex items-center gap-1 bg-stone-900/40 backdrop-blur-md px-2.5 py-1 rounded-md">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              {recipe.servings}serv
            </span>
          </div>
          <div className="flex items-center gap-1 bg-stone-900/40 backdrop-blur-md px-2 py-1 rounded-md">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>{recipe.rating || 4.8}</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-stone-900 group-hover:text-orange-600 transition line-clamp-1">
            {recipe.title}
          </h3>
          <p className="text-stone-500 text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
          <span className="font-medium uppercase tracking-wider text-[10px] bg-stone-100 text-stone-600 px-2 py-1 rounded">
            {recipe.difficulty || 'Easy'}
          </span>
          <span className="text-orange-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Recipe &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
