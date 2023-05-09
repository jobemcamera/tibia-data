import React, { useState } from 'react'
import styles from './WorldsList.module.scss'
import { Link } from 'react-router-dom'
import SelectFilter from 'components/SelectFilter';

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

    const options = {
        location: ["", "Europe", "South America", "North America"],
        pvp_type: ["", "Open PvP", "Optional PvP", "Hardcore PvP", "Retro Open PvP", "Retro Hardcore PvP"],
        transfer_type: ["", "regular", "blocked", "locked"]
    }


    return (
        <>
            <section>
                <table className={styles.worldslist__table}>
                    <thead className={styles.worldslist__table__thead}>
                        <tr className={styles.worldslist__table__thead__tr}>
                            <th className={styles.worldslist__table__thead__tr__th}>World</th>
                            <th className={styles.worldslist__table__thead__tr__th}>Online</th>
                            <th className={styles.worldslist__table__thead__tr__th}>
                                <div className={styles.worldslist__options__container}>
                                    <span>Location </span>
                                    <SelectFilter
                                        filters={filters}
                                        handleFilterChange={handleFilterChange}
                                        options={options.location} 
                                        info="location"
                                    />
                                </div>
                            </th>
                            <th className={styles.worldslist__table__thead__tr__th}>
                                <div className={styles.worldslist__options__container}>
                                    <span>PvP Type </span>
                                    <SelectFilter 
                                        filters={filters}
                                        handleFilterChange={handleFilterChange}
                                        options={options.pvp_type}
                                        info="pvp_type"
                                    />
                                </div>
                            </th>
                            <th className={styles.worldslist__table__thead__tr__th}>
                                <div className={styles.worldslist__options__container}>
                                    <span>Transfer Type </span>
                                    <SelectFilter 
                                        filters={filters}
                                        handleFilterChange={handleFilterChange}
                                        options={options.transfer_type}
                                        info="transfer_type"
                                    />
                                    {/* <select name="transfer_type" value={filters.transfer_type} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="regular">Regular</option>
                                        <option value="blocked">Blocked</option>
                                        <option value="locked">Locked</option>
                                    </select> */}
                                </div>
                            </th>
                            <th className={styles.worldslist__table__thead__tr__th}>BattleEye</th>
                        </tr>
                    </thead>
                    <tbody className={styles.worldslist__table__tbody}>
                        {filteredWorlds.length > 0 ? filteredWorlds.map(world => (
                            <tr key={world.name} className={styles.worldslist__table__tbody__tr}>
                                <td className={styles.worldslist__table__tbody__tr__td}>
                                    <Link to={world.name}>
                                        {world.name}
                                    </Link>
                                </td>
                                <td className={styles.worldslist__table__tbody__tr__td}>{world.players_online}</td>
                                <td className={styles.worldslist__table__tbody__tr__td}>{
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
                                <td className={styles.worldslist__table__tbody__tr__td}>{world.pvp_type}</td>
                                <td className={styles.worldslist__table__tbody__tr__td}>{world.transfer_type}</td>
                                <td className={styles.worldslist__table__tbody__tr__td}>
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
