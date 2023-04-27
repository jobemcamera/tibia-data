import React from 'react'
import styles from './WorldsList.module.scss'

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
                                <td>{world.name}</td>
                                <td>{world.players_online}</td>
                                <td>{world.location}</td>
                                <td>{world.pvp_type}</td>
                                <td>{world.transfer_type}</td>
                                <td>{world.battleye_protected}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </>
    )
}
