import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharacterNotFound from "../../components/Characters/CharacterNotFound";
import CharacterInformation from "../../components/Characters/CharacterInformation";
import CharacterAchievements from "../../components/Characters/CharacterAchievements";
import AccountInformation from "../../components/Characters/AccountInformation";
import OtherCharacters from "../../components/Characters/OtherCharacters";
import Form from "components/Form";
import Loading from "components/Loading";
import { useCharacter } from "hooks/useCharacter";

export default function Character() {
  const navigate = useNavigate();
  const { characterName } = useParams();
  const [enteredCharacterName, setEnteredCharacterName] =
    useState(characterName);

  const formattedName = enteredCharacterName.replace(/\+/g, " ")?.toLowerCase();
  const formattedNameForURL = encodeURIComponent(formattedName);
  const {
    data: characterData,
    isLoading,
    isError,
  } = useCharacter(formattedNameForURL, { enabled: !!formattedNameForURL, refetchOnWindowFocus: false});
  console.log(characterData, isLoading, isError)
  const character = characterData?.character || {};

  useEffect(() => {
    setEnteredCharacterName(characterName);
  }, [characterName]);

  const searchCharacterHandler = (enteredCharacter) => {
    if (enteredCharacter.trim() === "") return;

    setEnteredCharacterName(enteredCharacter);

    const formattedNameForURL = enteredCharacter.replace(/\s/g, "+");
    navigate(`/characters/${formattedNameForURL}`);

    window.scrollTo(0, 0);
  };

  const characterNotFound = character?.character?.name === "";

  return (
    <section>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {(!characterData || characterNotFound || isError) && (
            <CharacterNotFound character={formattedName} />
          )}
          {character && !characterNotFound && !isError && (
            <>
              <CharacterInformation character={character.character} />
              <CharacterAchievements character={character.achievements} />
              <AccountInformation character={character.account_information} />
              <OtherCharacters character={character.other_characters} />
            </>
          )}
        </>
      )}
      <Form
        name="Search Character"
        onSearchCharacter={searchCharacterHandler}
      />
    </section>
  );
}
