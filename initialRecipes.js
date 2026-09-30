export const INITIAL_RECIPES = [
  {
    id: '1',
    title: 'Classic Homemade Margherita Pizza',
    description: 'Crispy crust, rich tomato sauce, fresh mozzarella, and aromatic basil leaves baked to perfection.',
    category: 'Italian',
    prepTime: '25 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'i1', name: 'Pizza dough', amount: 500, unit: 'g' },
      { id: 'i2', name: 'San Marzano tomatoes', amount: 400, unit: 'g' },
      { id: 'i3', name: 'Fresh mozzarella cheese', amount: 250, unit: 'g' },
      { id: 'i4', name: 'Fresh basil leaves', amount: 15, unit: 'leaves' },
      { id: 'i5', name: 'Extra virgin olive oil', amount: 2, unit: 'tbsp' },
      { id: 'i6', name: 'Salt', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Preheat your oven and pizza stone to highest setting (around 250°C / 480°F).',
      'Roll out the pizza dough on a floured surface to desired thickness.',
      'Crush the San Marzano tomatoes and spread evenly over the dough leaving a small crust border.',
      'Tear the fresh mozzarella and distribute across the sauce. Drizzle with olive oil and sprinkle salt.',
      'Bake in the preheated oven for 12-15 minutes until the crust is golden and cheese is bubbly.',
      'Top with fresh basil leaves right after taking it out of the oven. Slice and serve hot!'
    ],
    notes: 'For best results, let the dough cold-ferment in the refrigerator for 24 hours prior.'
  },
  {
    id: '2',
    title: 'Creamy Garlic Butter Salmon',
    description: 'Pan-seared salmon fillets bathed in a rich, velvety garlic butter and herb cream sauce.',
    category: 'Seafood',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    difficulty: 'Easy',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'i1', name: 'Salmon fillets', amount: 2, unit: 'fillets' },
      { id: 'i2', name: 'Butter', amount: 3, unit: 'tbsp' },
      { id: 'i3', name: 'Minced garlic', amount: 4, unit: 'cloves' },
      { id: 'i4', name: 'Heavy cream', amount: 0.5, unit: 'cup' },
      { id: 'i5', name: 'Baby spinach', amount: 1, unit: 'cup' },
      { id: 'i6', name: 'Lemon juice', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Season salmon fillets with salt and black pepper on both sides.',
      'Melt 1 tablespoon of butter in a large skillet over medium-high heat. Add salmon and sear for 4-5 minutes per side until golden brown. Remove and set aside.',
      'In the same skillet, melt remaining butter. Sauté minced garlic until fragrant (about 30 seconds).',
      'Pour in heavy cream and lemon juice, bringing to a gentle simmer until thickened.',
      'Add baby spinach and let it wilt in the warm sauce.',
      'Return salmon fillets to the skillet, spooning the creamy garlic sauce generously over top. Serve warm.'
    ],
    notes: 'Pairs exceptionally well with garlic mashed potatoes or steamed asparagus.'
  },
  {
    id: '3',
    title: 'Authentic Filipino Chicken Adobo',
    description: 'Tender chicken simmered in a savory, tangy blend of soy sauce, vinegar, garlic, and black peppercorns.',
    category: 'Asian',
    prepTime: '15 mins',
    cookTime: '35 mins',
    servings: 4,
    difficulty: 'Easy',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'i1', name: 'Chicken thighs and drumsticks', amount: 1, unit: 'kg' },
      { id: 'i2', name: 'Soy sauce', amount: 0.5, unit: 'cup' },
      { id: 'i3', name: 'Cane vinegar or coconut vinegar', amount: 0.3, unit: 'cup' },
      { id: 'i4', name: 'Garlic cloves, crushed', amount: 8, unit: 'cloves' },
      { id: 'i5', name: 'Whole black peppercorns', amount: 1, unit: 'tbsp' },
      { id: 'i6', name: 'Dried bay leaves', amount: 3, unit: 'leaves' },
      { id: 'i7', name: 'Steamed white rice', amount: 4, unit: 'servings' }
    ],
    instructions: [
      'Combine chicken, soy sauce, crushed garlic, whole peppercorns, and bay leaves in a bowl or pot. Marinate for at least 30 minutes.',
      'Place the pot over medium heat, cover, and bring to a boil. Simmer for 15 minutes without stirring.',
      'Pour in the vinegar and continue to simmer uncovered for another 15 minutes until chicken is tender and sauce reduces.',
      'Optional: Remove chicken pieces and pan-fry them in a little oil until golden brown, then return to the sauce.',
      'Serve hot over a generous bed of warm steamed white rice.'
    ],
    notes: 'Adobo actually tastes even better on the second day as the flavors soak deeper into the chicken!'
  },
  {
    id: '4',
    title: 'Berry Bliss Smoothie Bowl',
    description: 'Thick, refreshing, and nutrient-packed acai and mixed berry smoothie bowl topped with granola and fresh fruits.',
    category: 'Breakfast',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1,
    difficulty: 'Easy',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { id: 'i1', name: 'Frozen mixed berries', amount: 1.5, unit: 'cups' },
      { id: 'i2', name: 'Frozen banana', amount: 1, unit: 'pcs' },
      { id: 'i3', name: 'Almond milk', amount: 0.3, unit: 'cup' },
      { id: 'i4', name: 'Granola', amount: 0.3, unit: 'cup' },
      { id: 'i5', name: 'Chia seeds', amount: 1, unit: 'tbsp' },
      { id: 'i6', name: 'Fresh sliced strawberries', amount: 5, unit: 'pcs' }
    ],
    instructions: [
      'In a high-powered blender, combine frozen mixed berries, frozen banana, and almond milk.',
      'Blend on high until smooth and thick, stopping to scrape down sides if necessary. Do not add too much liquid so it retains a spoonable sorbet consistency.',
      'Pour the smoothie mixture into a chilled bowl.',
      'Arrange granola, fresh sliced strawberries, and chia seeds neatly on top in rows or sections.',
      'Enjoy immediately with a spoon!'
    ],
    notes: 'You can add a scoop of your favorite protein powder for an extra post-workout boost.'
  }
];
