import React from 'react'
import styles from './Menu.module.scss'


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <a href="#">Creatures</a>
                </li>
                <li>
                    <a href="#">Bosses</a>
                </li>
                <li>
                    <a href="#">Characteres</a>
                </li>
                <li>
                    <a href="#">Worlds</a>
                </li>
            </ul>
        </nav>
    )
}
