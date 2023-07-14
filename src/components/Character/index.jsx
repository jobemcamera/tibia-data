import CharacterTable from "components/CharacterTable";
import React from "react";

export default function Character({ character }) {
  return (
    <>
      <CharacterTable character={character} />
    </>
  )
}