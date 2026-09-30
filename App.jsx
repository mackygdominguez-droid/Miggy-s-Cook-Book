import React, { useState, useEffect } from 'react';
import { INITIAL_RECIPES } from './data/initialRecipes';
import { Navbar } from './components/Navbar';
import { RecipeList } from './components/RecipeList';
import { RecipeDetail } from './components/RecipeDetail';
import { FavoritesView } from './components/FavoritesView';
import { AddRecipeModal } from './components/AddRecipeModal';

export function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('miggy_cookbook_recipes');
    return saved ? JSON.parse(saved) : INITIAL_RECIPES;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('miggy_cookbook_favorites');
    return saved ? JSON.parse(saved) : ['1', '3'];
  });

  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'favorites' | 'detail' | 'add'
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('miggy_cookbook_recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('miggy_cookbook_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (recipeId) => {
    setFavorites(prev =>
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
    setSelectedRecipe(newRecipe);
    setActiveTab('detail');
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'add') {
            setIsAddModalOpen(true);
          } else {
            setActiveTab(tab);
            if (tab !== 'detail') setSelectedRecipe(null);
          }
        }}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (activeTab === 'detail') setActiveTab('explore');
        }}
        favoritesCount={favorites.length}
      />

      <main className="flex-1">
        {activeTab === 'explore' && (
          <RecipeList
            recipes={recipes}
            onSelectRecipe={handleSelectRecipe}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'favorites' && (
          <FavoritesView
            recipes={recipes}
            favorites={favorites}
            onSelectRecipe={handleSelectRecipe}
            onToggleFavorite={handleToggleFavorite}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'detail' && selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setActiveTab('explore')}
            isFavorite={favorites.includes(selectedRecipe.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>

      {isAddModalOpen && (
        <AddRecipeModal
          onClose={() => setIsAddModalOpen(false)}
          onAddRecipe={handleAddRecipe}
        />
      )}

      <footer className="bg-white border-t border-stone-200 py-6 text-center text-xs text-stone-500">
        <p>© {new Date().getFullYear()} MIGGY's Cookbook. Crafted with passion for food lovers everywhere.</p>
      </footer>
    </div>
  );
}

export default App;
