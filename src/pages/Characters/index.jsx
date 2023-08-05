import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'components/Form';

export default function Characters() {
  const navigate = useNavigate();

  const searchCharacterHandler = (enteredCharacter) => {
    const formattedNameForURL = enteredCharacter.replace(/\s/g, '+');
    navigate(`/characters/${formattedNameForURL}`);
  }

  return (
    <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
  );
}
