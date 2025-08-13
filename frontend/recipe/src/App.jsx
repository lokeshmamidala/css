import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

const defaultRecipes = [
  {
    title: 'Spaghetti Bolognese',
    description: 'A classic Italian pasta dish.',
    ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Garlic', 'Onion'],
    instructions: [
      'Boil the spaghetti.',
      'Cook beef with garlic and onion.',
      'Add tomato sauce and simmer.',
      'Combine with spaghetti and serve.',
    ],
  },
  {
    title: 'Pancakes',
    description: 'Fluffy homemade pancakes.',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Sugar'],
    instructions: 'Mix ingredients and cook on a griddle until golden brown.',
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem('recipes');
    return stored ? JSON.parse(stored) : defaultRecipes;
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleRemoveRecipe = (indexToRemove) => {
    setRecipes(recipes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>Recipe Sharing Platform</h1>
      <RecipeForm handleAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} onRemove={handleRemoveRecipe} />
    </div>
  );
};

export default App;
