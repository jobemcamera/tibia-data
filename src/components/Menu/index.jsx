import React from 'react';
import styles from './Menu.module.scss';
import MenuLink from 'components/MenuLink';
import Logo from '../../../src/assets/svg/favicon.ico';

export default function Menu() {
  return (
    <header>
      <section className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt='Logo' />
          <h1>Tibia Data</h1>
        </div>
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
