import MainTitle from 'components/MainTitle';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

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

    }, []);

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
                                <Moment format="MMM D YYYY, HH:mm:ss">
                                    {worldInfo.record_date}
                                </Moment>
                            </td>
                        </tr>
                        <tr>
                            <td>Creation Date:</td>
                            <td>
                                <Moment format="MMM YYYY">
                                    {worldInfo.creation_date}
                                </Moment>
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
                                        <Moment format="MMMM DD, YYYY">
                                            {worldInfo.battleye_date}
                                        </Moment>
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
