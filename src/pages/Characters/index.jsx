import Character from 'components/Character';
import Form from 'components/Form';
import React, { useState } from 'react';
import Loading from 'components/Loading';

export default function Characters() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCharacterHandler = async (enteredCharacter) => {
    setLoading(true);

    if (enteredCharacter.trim().length === 0) {
      setLoading(false);
      return;
    }

    const formattedName = enteredCharacter.replace(/ /g, '%20');
    try {
      const response = await fetch(`https://api.tibiadata.com/v3/character/${formattedName}`);
      const data = await response.json();
      const characterData = data.characters;
      if (characterData.character && characterData.character.name.trim() !== '') {
        setCharacter(characterData);
      } else {
        return;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {character && Object.keys(character).length > 0 && !loading && (
        <Character character={character} />
      )} 
      {loading && <Loading />} 
      <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
    </>
  );
}
