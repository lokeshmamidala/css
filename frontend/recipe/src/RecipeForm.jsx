import React, { useState } from 'react';

const RecipeForm = ({ handleAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map(ing => ing.trim()),
      instructions: instructions.includes('\n')
        ? instructions.split('\n').map(step => step.trim())
        : instructions.trim(),
    };

    handleAddRecipe(newRecipe);

    // Clear form
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h3>Add a New Recipe</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        required
      />
      <textarea
        placeholder="Instructions (you can use line breaks)"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
