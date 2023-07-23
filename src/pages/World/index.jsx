import MainTitle from 'components/MainTitle';
import styles from './World.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'components/Button';
import { formatDate } from 'components/SharedFunctions';

export default function World() {
  const { world } = useParams();
  const [worldInfo, setWorldInfo] = useState({});

  useEffect(() => {
    const fetchWorldInfo = async () => {
      try {
        const response = await fetch(`https://api.tibiadata.com/v3/world/${world}`);
        const jsonData = await response.json();
        setWorldInfo(jsonData.worlds.world);
        console.log(jsonData.worlds.world)
      } catch (error) {
        console.error("Error fetching world info:", error);
      }
    };

    fetchWorldInfo();
  }, [world]);

  const back = useNavigate();

  function backPage() {
    return back(-1);
  }
  // "record_date": "2020-05-01T15:58:30Z",
  // "last_login": "2020-08-31T13:47:00Z",
  const tableData = [
    { label: "Status", value: worldInfo.status },
    { label: "Players Online", value: worldInfo.players_online },
    {
      label: "Online Record",
      value: worldInfo.record_players
        ? `${worldInfo.record_players} players on ${formatDate(worldInfo.record_date, "MMMM D YYYY, HH:mm:ss z")}` 
        : null,
    },
    {
      label: "Creation Date",
      value: worldInfo.creation_date ? formatDate(worldInfo.creation_date, "MMMM YYYY") : null,
    },
    { label: "Location", value: worldInfo.location },
    { label: "PvP Type", value: worldInfo.pvp_type },
    {
      label: "World Quest Titles",
      value: worldInfo.world_quest_titles && worldInfo.world_quest_titles.length > 0
        ? worldInfo.world_quest_titles.join(', ')
        : "N/A",
    },
    {
      label: "BattlEye Status",
      value: worldInfo.battleye_protected === true
        ? worldInfo.battleye_date !== "release"
          ? `Protected by BattlEye since ${formatDate(worldInfo.battleye_date, "MMMM DD, YYYY")}`
          : "Protected by BattlEye since its release."
        : "Not protected by BattlEye.",
    },
    { label: "Game World Type", value: worldInfo.game_world_type },
  ];

  return (
    <section className={styles.container}>
      <MainTitle title={world}>
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
  );
}