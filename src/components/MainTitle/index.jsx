import React from 'react'
import styles from './MainTitle.module.scss'

export default function MainTitle({ title, children }) {
    return (
        <div className={styles.main__title__container}>
            <h1 className={styles.main__title}>{title}</h1>
            {children}
        </div>
    )
}
