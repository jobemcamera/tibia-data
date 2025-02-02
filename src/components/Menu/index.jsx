import React, { useEffect, useState, useRef } from "react";
import styles from "./Menu.module.scss";
import MenuLink from "components/MenuLink";
import Logo from "../../../src/assets/svg/favicon.ico";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resizeWindow, setResizeWindow] = useState(window.innerWidth);
  const menuRef = useRef(null);
  const edgeSize = 1024;

  const handleWindowResize = () => {
    setResizeWindow(window.innerWidth);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("mousedown", handleClickOutside);

    if (window.innerWidth >= edgeSize) {
      setMenuOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isDesktop = resizeWindow > edgeSize;
  const isMobile = resizeWindow <= edgeSize;

  return (
    <header>
      <section className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" />
          <h1>Tibia Data</h1>
        </div>
        {isDesktop && <MenuLinkDesktop />}
        {isMobile && (
          <MenuLinkMobile
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
            menuRef={menuRef}
          />
        )}
      </section>
    </header>
  );
}

const MenuLinkDesktop = () => {
  return <nav className={styles.nav}>{<MenuLinksRender />}</nav>;
};

const MenuLinkMobile = ({ toggleMenu, menuOpen, menuRef }) => {
  const backgroundMenuHamburguer =
    "https://static.tibia.com/images/global/header/mobile/button-icon-menu.png";

  const navStyle = menuOpen ? `${styles.menuOpenedNav}` : styles.nav;
  const ulStyle = menuOpen ? `${styles.menuOpenedUl}` : styles.ul;

  return (
    <div ref={menuRef}>
      <button onClick={toggleMenu}>
        <img src={backgroundMenuHamburguer} alt="Menu hamburguer" />
      </button>
      {menuOpen && (
        <nav className={navStyle}>
          {<MenuLinksRender toggleMenu={toggleMenu} classNameProps={ulStyle} />}
        </nav>
      )}
    </div>
  );
};

const MenuLinksRender = ({ toggleMenu, classNameProps }) => {
  return (
    <ul className={classNameProps}>
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
  );
};
