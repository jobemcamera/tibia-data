import Character from 'components/Character';
import Form from 'components/Form';
import React, { useState } from 'react';

export default function Characters() {
  const [character, setCharacter] = useState(null);

  const searchCharacterHandler = async (enteredCharacter) => {
    if (enteredCharacter.trim().length === 0) {
      console.log('vazio');
      return;
    }

    const formattedName = enteredCharacter.replace(/ /g, '%20');
    try {
      const response = await fetch(`https://api.tibiadata.com/v3/character/${formattedName}`);
      const data = await response.json();
      const characterData = data.characters;
      console.log(characterData);
      setCharacter(characterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {character && Object.keys(character).length > 0 && <Character character={character} />}
      <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
    </>
  );
}
