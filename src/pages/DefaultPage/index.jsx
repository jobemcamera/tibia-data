import React from 'react'
import styles from './DefaultPage.module.scss'
import { Outlet } from 'react-router-dom'

export default function DefaultPage({ children }) {
    return (
        <main className={styles}>
            <Outlet />
            {children}
        </main>
    )
}
