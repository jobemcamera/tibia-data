import React from 'react'
import styles from './MenuLink.module.scss'
import { NavLink } from 'react-router-dom'

export default function MenuLink({ to, toggleMenu, children }) {
  return (
    <li className={styles.list}>
      <NavLink to={to} className={styles.link} onClick={() => toggleMenu && toggleMenu()}>
        {children}
      </NavLink>
    </li>
  )
}
