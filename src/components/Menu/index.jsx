import React, { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import MenuLink from 'components/MenuLink';
import Logo from '../../../src/assets/svg/favicon.ico';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resizeWindow, setResizeWindow] = useState(window.innerWidth);
  const edgeSize = 1200;

  const handleWindowResize = () => {
    setResizeWindow(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    if (window.innerWidth >= edgeSize) {
      setMenuOpen(false);
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerWidth]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isDesktop = resizeWindow >= edgeSize;

  return (
    <header>
      <section className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt='Logo' />
          <h1>Tibia Data</h1>
        </div>
        {isDesktop && <MenuLinkDesktop toggleMenu={toggleMenu} styles={styles} />}
        {!isDesktop && <MenuLinkMobile toggleMenu={toggleMenu} menuOpen={menuOpen} />}
      </section>
    </header>
  );
}

const MenuLinkDesktop = ({ toggleMenu, styles }) => {
  return (
    <nav className={styles.nav}>
      {menuLinksRender(toggleMenu)}
    </nav>
  )
}

const MenuLinkMobile = ({ toggleMenu, menuOpen }) => {
  const backgroundMenuHamburguer = 'https://static.tibia.com/images/global/header/mobile/button-icon-menu.png'

  const navStyle = menuOpen ? `${styles.menuOpenedNav}` : styles.nav;
  const ulStyle = menuOpen ? `${styles.menuOpenedUl}` : styles.ul;
  
  return (
    <div>
      <button onClick={toggleMenu}>
        <img src={backgroundMenuHamburguer} alt='Menu hamburguer' />
      </button>
      <nav className={navStyle}>
        {menuLinksRender(toggleMenu, ulStyle)}
      </nav>
    </div>
  )
}

const menuLinksRender = (toggleMenu, className) => {
  return (
    <ul className={className}>
      <MenuLink toggleMenu={toggleMenu} to="/">
        Home
      </MenuLink>
      <MenuLink toggleMenu={toggleMenu} to="creatures">
        Creatures
      </MenuLink>
      <MenuLink toggleMenu={toggleMenu} to="boostablebosses">
        Boostable Bosses
      </MenuLink>
      <MenuLink toggleMenu={toggleMenu} to="characters">
        Characters
      </MenuLink>
      <MenuLink toggleMenu={toggleMenu} to="worlds">
        Worlds
      </MenuLink>
    </ul>
  )
}