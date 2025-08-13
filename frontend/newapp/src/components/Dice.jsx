import React from 'react';

const Dice = () => {
  let s = 6; 
  let w = prompt("Throw the dice (enter a number from 1 to 6):");

  if (w == s) {
    return <h1>You win!</h1>;
  } else {
    return <h1>You lose.</h1>;
  }
};

export default Dice;
