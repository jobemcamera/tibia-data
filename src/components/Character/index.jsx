import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterNotFound from "components/CharacterNotFound";
import CharacterAchievements from "components/CharacterAchievements";
import AccountInformation from "components/AccountInformation";
import OtherCharacters from "components/OtherCharacters";
import CharacterInformation from "components/CharacterInformation";
import Form from "components/Form";
import Loading from 'components/Loading';

export default function Character() {
  const { characterName } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [enteredCharacterName, setEnteredCharacterName] = useState('');
  const navigate = useNavigate();

  const fetchCharacterData = async (name) => {
    setLoading(true);

    try {
      const formattedName = name.replace(/\+/g, " ");
      const response = await fetch(
        `https://api.tibiadata.com/v3/character/${encodeURIComponent(formattedName)}`
      );
      const data = await response.json();
      const characterData = data.characters;

      if (characterData.character && characterData.character.name.trim() !== "") {
        setEnteredCharacterName(characterName)
        setCharacterData(characterData);
      } else {
        setEnteredCharacterName(characterName)
        setCharacterData(null);
      }
    } catch (error) {
      setCharacterData(null);
    }

    setLoading(false);
  };

  // Fetch => URL
  useEffect(() => {
    fetchCharacterData(characterName);
  }, [characterName]);


  // Fetch => Form
  const searchCharacterHandler = async (enteredCharacter) => {
    setSearched(true);

    if (enteredCharacter.trim().length === 0) {
      return;
    }

    try {
      const response = await fetch(
        `https://api.tibiadata.com/v3/character/${encodeURIComponent(enteredCharacter)}`
      );
      const data = await response.json();
      const characterData = data.characters;
      if (characterData.character && characterData.character.name.trim() !== "") {
        setEnteredCharacterName(enteredCharacter)
        setCharacterData(characterData);
        const formattedNameForURL = enteredCharacter.replace(' ', '+');
        navigate(`/characters/${formattedNameForURL}`);
        window.scrollTo(0, 0);
      } else {
        setEnteredCharacterName(enteredCharacter)
        setCharacterData(null);
      }
    } catch (error) {
      setCharacterData(null);
    }
  };

  const isLoading = loading && !searched;
  const isCharacterNotFound = !characterData;
  const isCharacterDataAvailable = characterData;

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {isCharacterNotFound && (
            <CharacterNotFound character={enteredCharacterName} />
          )}
          {isCharacterDataAvailable && (
            <>
              <CharacterInformation character={characterData.character} />
              <CharacterAchievements character={characterData.achievements} />
              <AccountInformation character={characterData.account_information} />
              <OtherCharacters character={characterData.other_characters} />
            </>
          )}
          <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
        </>
      )}
    </>
  );
}
