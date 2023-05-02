import React from 'react'
import styles from './WorldsList.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function WorldsList({ worlds }) {

    return (
        <>
            <section>
                <table className={styles}>
                    <thead>
                        <tr>
                            <th>World</th>
                            <th>Online</th>
                            <th>Location</th>
                            <th>PvP Type</th>
                            <th>Transfer Type</th>
                            <th>BattleEye</th>
                        </tr>
                    </thead>
                    <tbody>
                        {worlds.map(world => (
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
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}
