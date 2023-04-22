import React from 'react'
import styles from './MenuLink.module.scss'
import { NavLink } from 'react-router-dom'

export default function MenuLink({ to, children }) {
    return (
        <li className={styles}>
            <NavLink to={to} className={styles.link}>
                {children}
            </NavLink>
        </li>
    )
}
