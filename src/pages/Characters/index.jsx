import Character from 'components/Character';
import Form from 'components/Form';
import React, { useState } from 'react';
import Loading from 'components/Loading';
import CharacterNotFound from 'components/CharacterNotFound';

export default function Characters() {
  const [character, setCharacter] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const [loading, setLoading] = useState(false);
  const [characterNotFound, setCharacterNotFound] = useState(false);

  const searchCharacterHandler = async (enteredCharacter) => {
    setLoading(true);
    setCharacterNotFound(false);

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
        setCharacterName(enteredCharacter);
        setCharacterNotFound(true);
        setCharacter(null);
      }
      setLoading(false);
    } catch (error) {
      setCharacterName(enteredCharacter);
      setCharacterNotFound(true);
      setCharacter(null);
      setLoading(false);
    }
  };

  return (
    <>
      {character && Object.keys(character).length > 0 && !loading && (
        <Character character={character} />
      )}
      {characterNotFound && !loading && <CharacterNotFound character={characterName} />}
      {loading && <Loading />} 
      <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
    </>
  );
}
