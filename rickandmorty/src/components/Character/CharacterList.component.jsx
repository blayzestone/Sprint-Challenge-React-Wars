import React from 'react';
import CharacterContainer from './CharacterContainer.component';
import Character from './Character.component';

const CharacterList = ({ charactersData }) => {
  return(
    <CharacterContainer>
      {charactersData.map(characterData => (
        <Character key={characterData.id} characterData={characterData}/> 
      ))}
    </CharacterContainer>
  );
}

export default CharacterList;