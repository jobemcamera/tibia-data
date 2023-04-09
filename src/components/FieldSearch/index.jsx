import Button from "../Button";
import styles from "./FieldSearch.module.scss";
import React from 'react'

export default function FieldSearch() {
    return (
        <div className={styles.field__container}>
            <label>Creature Name</label>
            <input type="text" />
            <Button />
        </div>
    )
}
