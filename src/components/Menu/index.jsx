import React, { useState } from 'react';
import styles from './Menu.module.scss';
import MenuLink from 'components/MenuLink';
import Logo from '../../../src/assets/svg/favicon.ico';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const backgroundMenuHamburguer = 'https://static.tibia.com/images/global/header/mobile/button-icon-menu.png'


  return (
    <header>
      <section className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt='Logo' />
          <h1>Tibia Data</h1>
        </div>
        <button onClick={toggleMenu}>
          <img src={backgroundMenuHamburguer} alt='Menu hamburguer' />
        </button>
        <nav>
          <ul>
            <MenuLink to="/">
              Home
            </MenuLink>
            <MenuLink to="creatures">
              Creatures
            </MenuLink>
            <MenuLink to="boostablebosses">
              Boostable Bosses
            </MenuLink>
            <MenuLink to="characters">
              Characters
            </MenuLink>
            <MenuLink to="worlds">
              Worlds
            </MenuLink>
          </ul>
        </nav>
      </section>
    </header>
  );
}
