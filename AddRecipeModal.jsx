import React, { useState } from 'react';
import { X, Plus, Trash2, ChefHat, Image, Clock, Users, BookOpen } from 'lucide-react';

const CATEGORIES = ['Italian', 'Asian', 'Seafood', 'Breakfast', 'Mexican', 'Dessert', 'Healthy', 'Quick & Easy'];

export function AddRecipeModal({ onClose, onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Italian');
  const [prepTime, setPrepTime] = useState('15 mins');
  const [cookTime, setCookTime] = useState('20 mins');
  const [servings, setServings] = useState(4);
  const [difficulty, setDifficulty] = useState('Medium');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');

  const [ingredients, setIngredients] = useState([
    { name: '', amount: '', unit: 'g' }
  ]);

  const [instructions, setInstructions] = useState([
    ''
  ]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: 'g' }]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleInstructionChange = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newRecipe = {
      id: Date.now().toString(),
      title,
      description,
      category,
      prepTime,
      cookTime,
      servings: Number(servings) || 4,
      difficulty,
      rating: 5.0,
      image: image.trim() || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80',
      ingredients: ingredients.filter(i => i.name.trim()).map((i, idx) => ({
        id: `i_${idx}`,
        name: i.name,
        amount: Number(i.amount) || 1,
        unit: i.unit
      })),
      instructions: instructions.filter(ins => ins.trim()),
      notes
    };

    onAddRecipe(newRecipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2 rounded-xl">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900">Create New Recipe</h2>
              <p className="text-xs text-stone-500">Share your culinary secret with MIGGY's Cookbook</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">Basic Information</h3>
            
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Recipe Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., Truffle Mushroom Risotto"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Short Description</label>
              <textarea
                rows="2"
                placeholder="A brief appetizing summary of your dish..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Category</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={e => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Prep Time</label>
                <input
                  type="text"
                  placeholder="e.g., 15 mins"
                  value={prepTime}
                  onChange={e => setPrepTime(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Cook Time</label>
                <input
                  type="text"
                  placeholder="e.g., 25 mins"
                  value={cookTime}
                  onChange={e => setCookTime(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Servings</label>
                <input
                  type="number"
                  min="1"
                  value={servings}
                  onChange={e => setServings(e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">Image URL</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={image}
                onChange={e => setImage(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Ingredients */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">Ingredients</h3>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Ingredient
              </button>
            </div>

            <div className="space-y-3">
              {ingredients.map((ing, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="number"
                    step="any"
                    placeholder="Amt"
                    value={ing.amount}
                    onChange={e => handleIngredientChange(index, 'amount', e.target.value)}
                    className="w-20 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Unit (g, cups, tbsp)"
                    value={ing.unit}
                    onChange={e => handleIngredientChange(index, 'unit', e.target.value)}
                    className="w-28 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ingredient name (e.g., Flour)"
                    value={ing.name}
                    onChange={e => handleIngredientChange(index, 'name', e.target.value)}
                    className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                  {ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="p-2 text-stone-400 hover:text-rose-500 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">Step-by-Step Instructions</h3>
              <button
                type="button"
                onClick={handleAddInstruction}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Step
              </button>
            </div>

            <div className="space-y-3">
              {instructions.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-2">
                    {index + 1}
                  </span>
                  <textarea
                    rows="2"
                    placeholder={`Describe step ${index + 1}...`}
                    value={step}
                    onChange={e => handleInstructionChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none"
                  />
                  {instructions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveInstruction(index)}
                      className="p-2 text-stone-400 hover:text-rose-500 transition mt-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chef Notes */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600">Chef's Notes / Tips</h3>
            <textarea
              rows="2"
              placeholder="Any extra tips or storage suggestions..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:bg-white focus:border-orange-500 focus:outline-none transition"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:bg-stone-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md transition"
            >
              Save Recipe
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
