import React from 'react'
import styles from './Menu.module.scss'


export default function Menu() {
    return (
        <header>
            <nav className={styles.menu}>
                <ul className={styles.menu__lista}>
                    <li className={styles}>
                        <a href="#" className={styles}>Creatures</a>
                    </li>
                    <li className={styles}>
                        <a href="#" className={styles}>Bosses</a>
                    </li>
                    <li className={styles}>
                        <a href="#" className={styles}>Characteres</a>
                    </li>
                    <li className={styles}>
                        <a href="#" className={styles}>Worlds</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
