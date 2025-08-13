import React from 'react';

const Movie = () => {
  const underratedMovies = ['Panja', 'Jhonny', 'I'];
  const heros = ['Pawan Kalyan', 'Pawan Kalyan', 'Vikram'];

  return (
    <div>
      <h2>Underrated Movies</h2>
      <ul>
        {underratedMovies.map((movie, index) => (
          <li key={index}>
            {movie} - Hero: {heros[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
