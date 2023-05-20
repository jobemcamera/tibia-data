import MainTitle from 'components/MainTitle';
import styles from './World.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import Button from 'components/Button';


export function formatDate(date, style) {
    return (
        <Moment format={style} tz="Europe/Paris">
            {date}
        </Moment>
    )
}

export default function World() {
    const { world } = useParams();

    const [worldInfo, setWorldInfo] = useState([]);

    useEffect(() => {
        const worldsInfo = async () => {
            const response = await fetch(`https://api.tibiadata.com/v3/world/${world}`);
            const jsonData = await response.json();
            setWorldInfo(jsonData.worlds.world);
        };

        worldsInfo();

    }, [world]);

    const back = useNavigate();

    function backPage() {
        return back(-1);
    }

    return (
        <section>
            <MainTitle title={world} >
                <Button title="Back" action={backPage} />
            </MainTitle>

            <div>
                <table className={styles.world__table}>
                    <tbody className={styles.world__table__tbody}>

                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Status:</td>
                            <td className={styles.world__table__tbody__tr__td}>{worldInfo.status}</td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Players Online:</td>
                            <td className={styles.world__table__tbody__tr__td}>{worldInfo.players_online}</td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Online Record:</td>
                            <td className={styles.world__table__tbody__tr__td}>
                                {`${worldInfo.record_players} players on `}
                                {formatDate(worldInfo.record_date, "MMMM D YYYY, HH:mm:ss z")}
                            </td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Creation Date:</td>
                            <td className={styles.world__table__tbody__tr__td}>
                                {formatDate(worldInfo.creation_date, "MMMM YYYY")}
                            </td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Location:</td>
                            <td className={styles.world__table__tbody__tr__td}>{worldInfo.location}</td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>PvP Type:</td>
                            <td className={styles.world__table__tbody__tr__td}>{worldInfo.pvp_type}</td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>World Quest Titles:</td>
                            <td className={styles.world__table__tbody__tr__td}>
                                {worldInfo && worldInfo.world_quest_titles && worldInfo.world_quest_titles.length > 0 ? worldInfo.world_quest_titles.join(', ') : "N/A"}
                            </td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>BattlEye Status:</td>
                            <td className={styles.world__table__tbody__tr__td}>{
                                worldInfo.battleye_protected === true && worldInfo.battleye_date !== "release" ?
                                    (<>
                                        Protected by BattlEye since {" "}
                                        {formatDate(worldInfo.battleye_date, "MMMM DD, YYYY")}
                                    </>)
                                    : worldInfo.battleye_protected === true ?
                                        ("Protected by BattlEye since its release.")
                                        : ("Not protected by BattlEye.")
                            }
                            </td>
                        </tr>
                        <tr className={styles.world__table__tbody__tr}>
                            <td className={styles.world__table__tbody__tr__td}>Game World Type:</td>
                            <td className={styles.world__table__tbody__tr__td}>{worldInfo.game_world_type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
}
