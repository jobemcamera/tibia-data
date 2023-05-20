import React from 'react'
import styles from './Home.module.scss'
import MainTitle from 'components/MainTitle'
import { openNewTab } from 'components/SharedFunctions'

export default function Home() {

    return (
        <div className={styles.home}>
            <MainTitle title="Home" />

            <article>
                <h3>Welcome to Tibia Data!</h3>
                <p>My name is Jobe Camera and this is a React App page for studying. The main goal of this app is to improve my skills in developing with React and APIs. The case study for this project is <span className={styles.home__link} onClick={openNewTab('https://tibiadata.com/')}>Tibia Data API</span> because I love Tibia, of course.</p>
                <p>In this app, you can find the Tibia content such as creatures, bosses, characters, and worlds.</p>
            </article>
            <article>
                <h3 className={styles.home__title}>So, what is Tibia?</h3>
                <p>
                    Tibia is a MMORPG that has been created in Europe and has been successful for many years. It allows people from all around the globe to come together on a virtual playground to explore, solve riddles, and undertake heroic adventures.
                </p>
                <p>
                    For over 25 years, players have been visiting the medieval world of Tibia. Currently, over 500,000 players from different parts of the world are inhabiting the Tibian continent and enjoying its various <span className={styles.home__link} onClick={openNewTab('https://www.tibia.com/abouttibia/?subtopic=gamefeatures')}>game features</span>.
                </p>
                <p>
                    Players can choose to act as knights, paladins, sorcerers, or druids and must develop their character's skills, explore different areas and dungeons, and engage with other players socially and diplomatically. Tibia's immersive gaming experience is largely due to the unique freedom players have in the game, in addition to the sophisticated chat tools available.
                </p>
                <p>
                    Although Tibia can be played for free, players can upgrade their account to a <span className={styles.home__link} onClick={openNewTab('https://www.tibia.com/abouttibia/?subtopic=premiumfeatures')}>Premium account</span> at any time. Premium accounts come with advantages such as access to special game areas and items, as well as other unique features.
                </p>
                <p>
                    For more information about the game, players can refer to the <span className={styles.home__link} onClick={openNewTab('https://www.tibia.com/gameguides/?subtopic=manual')}>manual</span>.
                </p>
            </article>
        </div >
    )
}
