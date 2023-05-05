import React, { useState } from 'react'
import styles from './WorldsList.module.scss'
import { Link } from 'react-router-dom'

export default function WorldsList({ worlds }) {

    const [filters, setFilters] = useState({
        location: '',
        pvp_type: '',
        transfer_type: '',
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredWorlds = worlds.filter((world) => {
        const isLocationMatched = filters.location === '' || filters.location === world.location;
        const isPvpTypeMatched = filters.pvp_type === '' || filters.pvp_type === world.pvp_type;
        const isTransferTypeMatched = filters.transfer_type === '' || filters.transfer_type === world.transfer_type;

        return isLocationMatched && isPvpTypeMatched && isTransferTypeMatched
    });


    return (
        <>
            <section>
                <table className={styles}>
                    <thead>
                        <tr>
                            <th>World</th>
                            <th>Online</th>
                            <th>
                                <div>
                                    <span>Location </span>
                                    <select name="location" value={filters.location} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="Europe">Europe</option>
                                        <option value="South America">South America</option>
                                        <option value="North America">North America</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>PvP Type </span>
                                    <select name="pvp_type" value={filters.pvp_type} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="Open PvP">Open PvP</option>
                                        <option value="Optional PvP">Optional PvP</option>
                                        <option value="Hardcore PvP">Hardcore PvP</option>
                                        <option value="Retro Open PvP">Retro Open PvP</option>
                                        <option value="Retro Hardcore PvP">Retro Hardcore PvP</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Transfer Type </span>
                                    <select name="transfer_type" value={filters.transfer_type} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="regular">Regular</option>
                                        <option value="blocked">Blocked</option>
                                        <option value="locked">Locked</option>
                                    </select>
                                </div>
                            </th>
                            <th>BattleEye</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredWorlds.length > 0 ? filteredWorlds.map(world => (
                            <tr key={world.name}>
                                <td>
                                    <Link to={world.name}>
                                        {world.name}
                                    </Link>
                                </td>
                                <td>{world.players_online}</td>
                                <td>{
                                    world.location === 'Europe' ? (
                                        <div className={styles.flags}>
                                            <p>{world.location}</p>
                                            <img src="https://www.bandeirasnacionais.com/data/flags/w580/gb.webp" alt="The flag of The United Kingdom" />
                                        </div>
                                    ) : world.location === 'South America' ? (
                                        <div className={styles.flags}>
                                            <p>{world.location}</p>
                                            <img src="https://www.bandeirasnacionais.com/data/flags/w580/br.webp" alt="The flag of Brazil" />
                                        </div>
                                    ) : world.location === 'North America' ? (
                                        <div className={styles.flags}>
                                            <p>{world.location}</p>
                                            <img src="https://www.bandeirasnacionais.com/data/flags/w580/us.webp" alt='The flag of The United States of America' />
                                        </div>
                                    ) : null
                                }
                                </td>
                                <td>{world.pvp_type}</td>
                                <td>{world.transfer_type}</td>
                                <td>
                                    {
                                        world.battleye_date === "release" ? (
                                            <img src={'https://static.tibia.com/images/global/content/icon_battleyeinitial.gif'} alt='Yellow BattlEye item' />
                                        ) : world.battleye_date === "" ? (
                                            <p></p>
                                        ) : (
                                            <img src={'https://static.tibia.com/images/global/content/icon_battleye.gif'} alt='Green BattlEye item' />
                                        )
                                    }
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={6} className={styles.not__found}>Not found</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
