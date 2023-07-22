import AccountInformation from "components/AccountInformation";
import CharacterAchievements from "components/CharacterAchievements";
import CharacterInformation from "components/CharacterInformation";
import OtherCharacters from "components/OtherCharacters";
import React from "react";

export default function Character({ character }) {

  const characterInformation = character.character;
  const characterAchievements = character.achievements;
  const accountInformation = character.account_information;
  const otherCharacters = character.other_characters;
  return (
    <>
      {characterInformation && (<CharacterInformation character={characterInformation} />)}
      <CharacterAchievements character={characterAchievements} />
      <AccountInformation character={accountInformation} />
      <OtherCharacters character={otherCharacters} />
    </>
  )
}