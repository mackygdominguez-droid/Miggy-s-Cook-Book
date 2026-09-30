import React from 'react';
import { UtensilsCrossed, Plus, Heart, BookOpen, Search } from 'lucide-react';

export function Navbar({ activeTab, setActiveTab, searchQuery, setSearchQuery, favoritesCount }) {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('explore')}>
            <div className="bg-orange-500 text-white p-2 rounded-xl shadow-md flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                MIGGY's Cookbook
              </span>
              <span className="hidden sm:block text-xs text-stone-500 font-medium">
                Your Personal Culinary Companion
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-md relative hidden md:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border border-transparent rounded-full text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('explore')}
              className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition ${
                activeTab === 'explore'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Explore</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition relative ${
                activeTab === 'favorites'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favorites</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('add')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Recipe</span>
            </button>
          </div>

        </div>

        <div className="py-2.5 md:hidden border-t border-stone-100">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border border-transparent rounded-full text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
            />
          </div>
        </div>

      </div>
    </header>
  );
}
