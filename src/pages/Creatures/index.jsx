import Boosted from "components/Boosted";
import Card from "components/Card";
import Loading from "components/Loading";
import { useCreatures } from "hooks/useCreatures";
import React from "react";

export default function Creatures() {
  const { data: creaturesData, isLoading } = useCreatures();

  const creatures = creaturesData?.creatures || {};

  return (
    <>
      <Boosted boosted={creatures?.boosted} name="Creatures" text="creature">
        {isLoading && <Loading />}
      </Boosted>
      <Card item={creatures?.creature_list} />
      {isLoading && <Loading />}
    </>
  );
}
