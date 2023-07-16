import CharacterInformation from "components/CharacterInformation";
import React from "react";

export default function Character({ character }) {
  return (
    <>
      <CharacterInformation character={character} />
    </>
  )
}