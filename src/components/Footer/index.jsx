import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles}>
            <section>
                <p>Created by <Link to={'https://github.com/jobemcamera'}>Jobe Camera</Link></p>
                <p>Tibia is copyrighted by
                    CipSoft GmbH.
                    The official website for Tibia is 
                    <Link to={'https://www.tibia.com/mmorpg/free-multiplayer-online-role-playing-game.php'}> Tibia.com</Link>
                </p>
            </section>
        </footer>
    )
}
