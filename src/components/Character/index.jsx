import AccountInformation from "components/AccountInformation";
import CharacterAchievements from "components/CharacterAchievements";
import CharacterInformation from "components/CharacterInformation";
import React from "react";

export default function Character({ character }) {

  const characterInformation = character.character;
  const characterAchievements = character.achievements;
  const accountInformation = character.account_information
  return (
    <>
      {characterInformation && (<CharacterInformation character={characterInformation} />)}
      <CharacterAchievements character={characterAchievements} />
      <AccountInformation character={accountInformation} />
    </>
  )
}