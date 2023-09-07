import React from 'react'
import styles from './Menu.module.scss'
import MenuLink from 'components/MenuLink'


export default function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
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
    </header>
  )
}
