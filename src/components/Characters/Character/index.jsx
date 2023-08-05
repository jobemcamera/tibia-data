import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterNotFound from "../CharacterNotFound";
import CharacterInformation from "../CharacterInformation";
import CharacterAchievements from "../CharacterAchievements";
import AccountInformation from "../AccountInformation";
import OtherCharacters from "../OtherCharacters";
import Form from "components/Form";
import Loading from "components/Loading";

export default function Character() {
  const { characterName } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [enteredCharacterName, setEnteredCharacterName] = useState(characterName);
  const navigate = useNavigate();

  const fetchCharacterData = async (name) => {
    setShowLoading(true);
    const formattedName = name.replace(/\+/g, " ");

    try {
      const response = await fetch(`https://api.tibiadata.com/v3/character/${encodeURIComponent(formattedName)}`);
      const data = await response.json();
      const characterData = data.characters;

      if (characterData.character && characterData.character.name.trim() !== "") {
        setCharacterData(characterData);
      } else {
        setCharacterData(null);
      }
    } catch (error) {
      setCharacterData(null);
    }

    setEnteredCharacterName(formattedName); 
    setShowLoading(false);
  };

  // Fetch => URL
  useEffect(() => {
    setShowLoading(true);
    fetchCharacterData(characterName);
  }, [characterName]);

  // Fetch => Form
  const searchCharacterHandler = async (enteredCharacter) => {
    setShowLoading(true);

    if (enteredCharacter.trim().length === 0) {
      setShowLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://api.tibiadata.com/v3/character/${encodeURIComponent(enteredCharacter)}`);
      const data = await response.json();
      const characterData = data.characters;

      if (characterData.character && characterData.character.name.trim() !== "") {
        setCharacterData(characterData);
      } else {
        setCharacterData(null);
      }

      const formattedNameForURL = enteredCharacter.replace(/\s/g, '+');
      navigate(`/characters/${formattedNameForURL}`);
      window.scrollTo(0, 0);
    } catch (error) {
      setCharacterData(null);
    }

    setShowLoading(false);
    setEnteredCharacterName(enteredCharacter); 
  };

  const isLoading = showLoading;
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
        </>
      )}
      <Form name="Search Character" onSearchCharacter={searchCharacterHandler} />
    </>
  );
}
