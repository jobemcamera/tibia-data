import CharacterTable from "components/CharacterTable";
import MainTitle from "components/MainTitle";
import React from "react";

export default function Character({ character }) {
  return (
    <>
      <MainTitle title="Character Information" />
      <CharacterTable character={character} />
    </>
  )
}