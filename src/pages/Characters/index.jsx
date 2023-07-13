import Character from 'components/Character';
import Form from 'components/Form';
import React, { useState } from 'react';

export default function Characters() {
  const [character, setCharacter] = useState('');

  const searchCharacterHandler = (enteredCharacter) => {
    if (enteredCharacter.trim().length === 0) {
      console.log('vazio');
      return;
    }

    const formattedName = enteredCharacter.replace(/ /g, '%20');

    fetch(`https://api.tibiadata.com/v3/character/${formattedName}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
      <Character character={character} />
    </>
  );
}
