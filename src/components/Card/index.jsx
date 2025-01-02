import React from 'react'
import styles from './Card.module.scss'

export default function Card({ item }) {
    return (
        <ul className={styles.list__items}>
            {item?.map(item => (
                <li key={item.name} className={styles.list__item}>
                    <img src={item.image_url} alt={`${item.name}'s shape`} className={styles.list__item__img} />
                    <h3 className={styles.list__item__title}>{item.name}</h3>
                </li>
            ))}
        </ul>

    )
}
