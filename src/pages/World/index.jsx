import MainTitle from 'components/MainTitle';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';


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

    return (
        <section>
            <MainTitle title={world} />

            <div>
                <table>
                    <tbody>

                        <tr>
                            <td>Status:</td>
                            <td>{worldInfo.status}</td>
                        </tr>
                        <tr>
                            <td>Players Online:</td>
                            <td>{worldInfo.players_online}</td>
                        </tr>
                        <tr>
                            <td>Online Record:</td>
                            <td>
                                {`${worldInfo.record_players} players on `}
                                {formatDate(worldInfo.record_date, "MMMM D YYYY, HH:mm:ss z")}
                            </td>
                        </tr>
                        <tr>
                            <td>Creation Date:</td>
                            <td>
                                {formatDate(worldInfo.creation_date, "MMMM YYYY")}
                            </td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{worldInfo.location}</td>
                        </tr>
                        <tr>
                            <td>PvP Type:</td>
                            <td>{worldInfo.pvp_type}</td>
                        </tr>
                        <tr>
                            <td>World Quest Titles:</td>
                            <td>
                                {worldInfo && worldInfo.world_quest_titles && worldInfo.world_quest_titles.join(', ')}
                            </td>
                        </tr>
                        <tr>
                            <td>BattlEye Status:</td>
                            <td>{
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
                        <tr>
                            <td>Game World Type:</td>
                            <td>{worldInfo.game_world_type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
}
