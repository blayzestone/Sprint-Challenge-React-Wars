// Write your Character component here
import React from 'react';

const Character = ({ characterData }) => {
  return(
    <h1>{characterData.name}</h1>
  );
}

export default Character;