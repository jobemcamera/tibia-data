import React from 'react'

export default function CardBosses({ bosses }) {
    return (
        <ul>
            {bosses.map(boss => (
                <li key={boss.name}>
                    <img src={boss.image_url} alt={`Image ${boss.name}`} />
                    <h3>{boss.name}</h3>
                </li>
            ))}
        </ul>

    )
}
