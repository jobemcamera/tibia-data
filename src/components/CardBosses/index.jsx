import React from 'react'
import styles from './CardBosses.module.scss'

export default function CardBosses({ bosses }) {
    return (
        <ul className={styles.list__bosses}>
            {bosses.map(boss => (
                <li key={boss.name} className={styles.list__boss}>
                    <img src={boss.image_url} alt={`Image ${boss.name}`} className={styles.list__boss__img} />
                    <h3 className={styles.list__boss__title}>{boss.name}</h3>
                </li>
            ))}
        </ul>

    )
}
