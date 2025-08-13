import React, { useState } from 'react';

function Games() {
  const [img1, setImage1] = useState(null);
  const [img2, setImage2] = useState(null);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const getRandomImage = () => {
    const id = Math.floor(Math.random() * 10) + 1;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const handleClick = () => {
    const image1 = getRandomImage();
    const image2 = getRandomImage();
    setImage1(image1);
    setImage2(image2);

    if (image1 === image2) {
      setMessage("🎉 You won!");
      setCount(0); 
    } else {
      setMessage(""); 
      setCount(prev => prev + 1); 
    }
  };

  return (
    <div>
      <h1 className='hai'>Pokemon Game</h1>
      <button type="button" onClick={handleClick}>Try Your Luck</button>
      <div>
        {img1 && <img src={img1} alt="Pokemon 1" width="200" />}
        {img2 && <img src={img2} alt="Pokemon 2" width="200" />}
        {message && <h1>{message} in {count + 1} attempt(s)</h1>}
      </div>
    </div>
  );
}

export default Games;


