import React from 'react';

const RecipeCard = ({ title, description, ingredients, instructions }) => {
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      {Array.isArray(instructions) ? (
        <ol>
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      ) : (
        <p>{instructions}</p>
      )}
    </div>
  );
};

export default RecipeCard;
