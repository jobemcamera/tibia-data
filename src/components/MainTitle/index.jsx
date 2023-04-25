import React from 'react'
import styles from './MainTitle.module.scss'

export default function MainTitle({ title }) {
    return (
        <h1 className={styles}>{title}</h1>
    )
}