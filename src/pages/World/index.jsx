import MainTitle from 'components/MainTitle';
import styles from './World.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'components/Button';
import { formatDate } from 'components/SharedFunctions';
import Loading from 'components/Loading';
import WorldNotFound from 'components/Worlds/WorldNotFound';

export default function World() {
  const { world } = useParams();
  const [worldInfo, setWorldInfo] = useState({});
  const [enteredWorldName, setEnteredWorldName] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    const fetchWorldInfo = async () => {
      try {
        const response = await fetch(`https://api.tibiadata.com/v3/world/${world}`);
        const jsonData = await response.json();
        if (jsonData.worlds.world.status != "") {
          setWorldInfo(jsonData.worlds.world);
          console.log(worldInfo)
        } else {
          setWorldInfo({});
          console.log(worldInfo)
        }
      } catch (error) {
        setWorldInfo({});
      }
      setEnteredWorldName(world)
      setShowLoading(false);
    };

    fetchWorldInfo();
  }, [world]);

  const navigate = useNavigate();

  function backPage() {
    return navigate('/worlds');
  }

  const titleCapitalized = world && world.charAt(0).toUpperCase() + world.slice(1)

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

  const isLoading = showLoading;

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {Object.keys(worldInfo).length == 0 ? (
            <WorldNotFound world={enteredWorldName} />
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