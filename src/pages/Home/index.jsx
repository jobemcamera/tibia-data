import React from 'react'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <main className={styles.home}>
            <h1>Home</h1>

            <article>
                <p>Welcome to Tibia Data!</p>
                <p>My name is Jobe Camera and this is a React App page for studying. The main goal of this app is to improve my skills in developing with React and APIs. The case study for this project is Tibia Data because I love Tibia, of course.</p>
                <p>In this app, you can find the Tibia content such as creatures, bosses, characters, and worlds.</p>
            </article>
        </main>
    )
}
