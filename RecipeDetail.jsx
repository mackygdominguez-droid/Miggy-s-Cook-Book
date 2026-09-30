import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Star, Heart, Play, Minus, Plus, CheckCircle2, BookOpen, Utensils } from 'lucide-react';

export function RecipeDetail({ recipe, onBack, isFavorite, onToggleFavorite }) {
  const [servings, setServings] = useState(recipe.servings || 4);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const baseServings = recipe.servings || 4;
  const scaleFactor = servings / baseServings;

  const toggleIngredientCheck = (id) => {
    setCheckedIngredients(prev => ({ ...prev, [id]: !prev.id }));
  };

  const toggleStepComplete = (index) => {
    setCompletedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Back Button & Top Actions */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-semibold text-sm bg-white px-4 py-2 rounded-xl shadow-sm border border-stone-200 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Explore
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm border transition ${
              isFavorite
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`}
            />
            {isFavorite ? 'Saved to Favorites' : 'Save Recipe'}
          </button>

          <button
            onClick={() => setIsCookingMode(true)}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md transition flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            Start Cooking Mode
          </button>
        </div>
      </div>

      {/* Recipe Header Banner */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 mb-8">
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src={recipe.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=1200&q=80'}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {recipe.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {recipe.difficulty || 'Easy'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
              {recipe.title}
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-3xl line-clamp-2">
              {recipe.description}
            </p>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100 p-6 bg-white text-center">
          <div className="p-3">
            <span className="block text-xs font-bold uppercase text-stone-400">Prep Time</span>
            <span className="text-stone-800 font-bold text-base flex items-center justify-center gap-1.5 mt-1">
              <Clock className="w-4 h-4 text-orange-500" />
              {recipe.prepTime}
            </span>
          </div>
          <div className="p-3">
            <span className="block text-xs font-bold uppercase text-stone-400">Cook Time</span>
            <span className="text-stone-800 font-bold text-base flex items-center justify-center gap-1.5 mt-1">
              <Clock className="w-4 h-4 text-amber-500" />
              {recipe.cookTime}
            </span>
          </div>
          <div className="p-3">
            <span className="block text-xs font-bold uppercase text-stone-400">Servings</span>
            <span className="text-stone-800 font-bold text-base flex items-center justify-center gap-1.5 mt-1">
              <Users className="w-4 h-4 text-emerald-500" />
              {servings} Servings
            </span>
          </div>
          <div className="p-3">
            <span className="block text-xs font-bold uppercase text-stone-400">Rating</span>
            <span className="text-stone-800 font-bold text-base flex items-center justify-center gap-1.5 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              {recipe.rating || 4.8} / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Ingredients Column */}
        <div className="lg:col-span-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 h-fit">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-500" />
              Ingredients
            </h2>
            
            {/* Servings Scaler */}
            <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-7 h-7 bg-white rounded-lg shadow-sm flex items-center justify-center text-stone-700 hover:bg-stone-50 transition"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold px-2 text-stone-800">{servings}</span>
              <button
                onClick={() => setServings(servings + 1)}
                className="w-7 h-7 bg-white rounded-lg shadow-sm flex items-center justify-center text-stone-700 hover:bg-stone-50 transition"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {recipe.ingredients.map((ing) => {
              const scaledAmount = typeof ing.amount === 'number' ? (ing.amount * scaleFactor).toFixed(1).replace(/\.0$/, '') : ing.amount;
              const isChecked = checkedIngredients[ing.id];

              return (
                <li
                  key={ing.id}
                  onClick={() => toggleIngredientCheck(ing.id)}
                  className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition ${
                    isChecked ? 'bg-stone-100 text-stone-400 line-through' : 'bg-stone-50 hover:bg-orange-50/50 text-stone-800'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                    isChecked ? 'bg-stone-400 border-stone-400 text-white' : 'border-stone-300 bg-white'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </span>
                  <div className="text-sm">
                    <span className="font-bold mr-1.5 text-orange-600">
                      {scaledAmount} {ing.unit}
                    </span>
                    <span>{ing.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Instructions Column */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
          <h2 className="text-lg font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            Preparation Steps
          </h2>

          <ol className="space-y-6">
            {recipe.instructions.map((step, idx) => {
              const isCompleted = completedSteps[idx];

              return (
                <li
                  key={idx}
                  onClick={() => toggleStepComplete(idx)}
                  className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition border ${
                    isCompleted
                      ? 'bg-stone-50 border-stone-200 opacity-60'
                      : 'bg-white border-stone-100 hover:border-orange-200 shadow-sm'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </span>
                  <div className="flex-1">
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      isCompleted ? 'line-through text-stone-400' : 'text-stone-800'
                    }`}>
                      {step}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          {recipe.notes && (
            <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900">
              <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-amber-800">Chef's Notes</h4>
              <p className="text-sm leading-relaxed">{recipe.notes}</p>
            </div>
          )}
        </div>

      </div>

      {/* Cooking Mode Modal */}
      {isCookingMode && (
        <div className="fixed inset-0 z-50 bg-stone-900/90 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 text-white">
          
          <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-orange-500 text-white px-3 py-1 rounded-full">
                Cooking Mode
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-2">{recipe.title}</h2>
            </div>
            <button
              onClick={() => setIsCookingMode(false)}
              className="bg-white/10 hover:bg-white/25 px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              Exit Cooking Mode
            </button>
          </div>

          <div className="max-w-3xl mx-auto w-full text-center py-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-sm mb-6">
              Step {activeStepIndex + 1} of {recipe.instructions.length}
            </span>
            <p className="text-xl sm:text-3xl font-medium leading-relaxed mb-8">
              "{recipe.instructions[activeStepIndex]}"
            </p>
          </div>

          <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(activeStepIndex - 1)}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 font-semibold transition"
            >
              &larr; Previous Step
            </button>

            <div className="flex items-center gap-1.5">
              {recipe.instructions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === activeStepIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              disabled={activeStepIndex === recipe.instructions.length - 1}
              onClick={() => setActiveStepIndex(activeStepIndex + 1)}
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-30 font-semibold transition"
            >
              Next Step &rarr;
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
