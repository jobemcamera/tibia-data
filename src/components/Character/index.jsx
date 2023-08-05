import React, { useEffect, useRef, useState } from "react";
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
  const [validField, setValidField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const [searched, setSearched] = useState(false);
  const [enteredCharacter, setEnteredCharacter] = useState(''); // Novo estado para o valor do campo de entrada
  const characterInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacterData = async () => {
      setLoading(true);
      try {
        const formattedName = characterName.replace(/\+/g, " ");
        const response = await fetch(
          `https://api.tibiadata.com/v3/character/${encodeURIComponent(formattedName)}`
        );
        const data = await response.json();
        setCharacterData(data.characters);
        setInvalidData(false);
      } catch (error) {
        setCharacterData(null);
        setInvalidData(true);
      }
      setLoading(false);
    };

    fetchCharacterData();
  }, [characterName]);

  const searchCharacterHandler = async (enteredCharacter) => {
    setValidField(false);
    setSearched(true);
  
    if (enteredCharacter.trim().length === 0) {
      return;
    }
  
    const formattedNameForAPI = encodeURIComponent(enteredCharacter); 
    try {
      const response = await fetch(
        `https://api.tibiadata.com/v3/character/${formattedNameForAPI}`
      );
      const data = await response.json();
      const characterData = data.characters;
      if (characterData.character && characterData.character.name.trim() !== "") {
        setCharacterData(characterData);
        navigate(`/characters/${encodeURIComponent(enteredCharacter)}`);
        setInvalidData(false);
      } else {
        setValidField(true);
        setCharacterData(null);
        setInvalidData(true);
      }
    } catch (error) {
      setValidField(true);
      setCharacterData(null);
      setInvalidData(true);
    }
  };

  return (
    <>
      {loading && !searched ? (
        <Loading />
      ) : (
        <>
          {validField && !characterData && (
            <CharacterNotFound character={enteredCharacter} /> 
          )}
          {characterData && (
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
