import Boosted from "components/Boosted";
import Card from "components/Card";
import Loading from "components/Loading";
import { useBoostableBosses } from "hooks/useBoostableBosses";
import React from "react";

export default function BoostableBosses() {
  const { data: boostableBossesData, isLoading } = useBoostableBosses();

  const boostableBosses = boostableBossesData?.boostable_bosses || {};

  return (
    <>
      <Boosted
        boosted={boostableBosses?.boosted}
        name="Boostable Bosses"
        text="boss"
      >
        {isLoading && <Loading />}
      </Boosted>
      <Card item={boostableBosses?.boostable_boss_list} />
      {isLoading && <Loading />}
    </>
  );
}
