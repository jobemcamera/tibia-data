import React, { useState } from 'react';
import Loading from 'components/Loading';
import CharacterNotFound from 'components/CharacterNotFound';
import { useNavigate } from 'react-router-dom';
import Form from 'components/Form';

export default function Characters() {
  const [character, setCharacter] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const [loading, setLoading] = useState(false);
  const [characterNotFound, setCharacterNotFound] = useState(false);
  const navigate = useNavigate();

  const searchCharacterHandler = async (enteredCharacter) => {
    setLoading(true);
    setCharacterNotFound(false);

    if (enteredCharacter.trim().length === 0) {
      setLoading(false);
      return;
    }

    const formattedName = encodeURIComponent(enteredCharacter);
    try {
      const response = await fetch(`https://api.tibiadata.com/v3/character/${formattedName}`);
      const data = await response.json();
      const characterData = data.characters;
      if (characterData.character && characterData.character.name.trim() !== '') {
        setCharacter(characterData);
        const formattedNameForURL = enteredCharacter.replace(' ', '+');
        navigate(`/characters/${formattedNameForURL}`);
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
      {characterNotFound && !loading && <CharacterNotFound character={characterName} />}
      {loading && <Loading />} 
      <Form name="Search Character" validField={characterNotFound} onSearchCharacter={searchCharacterHandler} />
    </>
  );
}
