import MainTitle from "components/MainTitle";
import styles from "./World.module.scss";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "components/Button";
import { formatDate } from "components/SharedFunctions";
import Loading from "components/Loading";
import WorldNotFound from "components/Worlds/WorldNotFound";
import { useWorld } from "hooks/useWorld";

export default function World() {
  const navigate = useNavigate();
  const { worldName } = useParams();
  const {
    data: worldData,
    isLoading,
    isError,
  } = useWorld(worldName, {
    enabled: !!worldName,
    refetchOnWindowFocus: false,
  });

  const backPage = () => navigate("/worlds");

  const world = worldData?.world || {};

  const worldNotFound = world?.status === "";

  const titleCapitalized =
    worldName && worldName.charAt(0).toUpperCase() + worldName.slice(1);

  const tableData = [
    { label: "Status", value: world?.status },
    { label: "Players Online", value: world?.players_online },
    {
      label: "Online Record",
      value: world?.record_players
        ? `${world?.record_players} players on ${formatDate(
            world?.record_date,
            "MMMM D YYYY, HH:mm:ss z"
          )}`
        : null,
    },
    {
      label: "Creation Date",
      value: world?.creation_date
        ? formatDate(world?.creation_date, "MMMM YYYY")
        : null,
    },
    { label: "Location", value: world?.location },
    { label: "PvP Type", value: world?.pvp_type },
    {
      label: "World Quest Titles",
      value:
        world?.world_quest_titles && world?.world_quest_titles.length > 0
          ? world?.world_quest_titles.join(", ")
          : "N/A",
    },
    {
      label: "BattlEye Status",
      value:
        world?.battleye_protected === true
          ? world?.battleye_date !== "release"
            ? `Protected by BattlEye since ${formatDate(
                world?.battleye_date,
                "MMMM DD, YYYY"
              )}`
            : "Protected by BattlEye since its release."
          : "Not protected by BattlEye.",
    },
    { label: "Game World Type", value: world?.game_world_type },
  ];

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {worldNotFound || isError ? (
            <WorldNotFound
              world={worldName}
              isError={isError}
              action={backPage}
            />
          ) : (
            <section className={styles.container}>
              <MainTitle title={titleCapitalized}>
                <Button title="Back" action={backPage} />
              </MainTitle>
              <table>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.label}:</td>
                      <td>{item.value || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </>
      )}
    </>
  );
}
