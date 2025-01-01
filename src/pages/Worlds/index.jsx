import Records from "components/Records";
import WorldsList from "components/Worlds/WorldsList";
import { useWorlds } from "hooks/useWorlds";
import React from "react";

export default function Worlds() {
  const { data: worldsData, isLoading, isError } = useWorlds();

  const worlds = worldsData?.worlds || {};

  const worldsList = worlds?.regular_worlds;

  const records = {
    record_players: worlds?.record_players || 0,
    record_date: worlds?.record_date || 0,
    players_online: worlds?.players_online || 0,
    quantity: worlds?.regular_worlds?.length || 0,
  };

  return (
    <section>
      <Records records={records} isLoading={isLoading} isError={isError} />
      <WorldsList worlds={worldsList} isLoading={isLoading} isError={isError} />
    </section>
  );
}
