import CharacterAchievements from "components/CharacterAchievements";
import CharacterInformation from "components/CharacterInformation";
import React from "react";

export default function Character({ character }) {
  const characterInformation = character.character;
  const characterAchievements = character.achievements;
  return (
    <>
      <CharacterInformation character={characterInformation} />
      <CharacterAchievements character={characterAchievements} />
    </>
  )
}