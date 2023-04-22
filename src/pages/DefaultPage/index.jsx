import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultPage({ children }) {
    return (
        <main>
            <h1>DefaultPage</h1>
            <Outlet />
            {children}
        </main>
    )
}
