import React from 'react';
import styles from './Footer.module.scss';
import { openNewTab } from 'components/SharedFunctions';

export default function Footer() {
    return (
        <footer className={styles}>
            <section>
                <p>Created by <span className={styles.footer__link} onClick={openNewTab('https://github.com/jobemcamera')}>Jobe Camera</span></p>
                <p>Tibia is copyrighted by
                    CipSoft GmbH.
                    The official website for Tibia is 
                    <span className={styles.footer__link} onClick={openNewTab('https://www.tibia.com/mmorpg/free-multiplayer-online-role-playing-game.php')}> Tibia.com</span>
                </p>
            </section>
        </footer>
    )
}
