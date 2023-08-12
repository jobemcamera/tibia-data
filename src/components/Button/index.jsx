import React from 'react'
import styles from "./Button.module.scss";

export default function Button({ title, action }) {
  return (
    <div className={styles.container}>
      <button onClick={action}>{title}</button>
    </div>
  )
}
