import React from 'react';
import Character from './Character.component';

const CharacterList = ({ charactersData }) => {
  return(
    <div>
      {charactersData.map(characterData => (
        <Character key={characterData.id} characterData={characterData}/> 
      ))}

    </div>
  );
}

export default CharacterList;