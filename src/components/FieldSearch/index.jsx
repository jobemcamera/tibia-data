import Button from "../Button";
import styles from "./FieldSearch.module.scss";
import React from 'react'

export default function FieldSearch( {name} ) {
    return (
        <div className={styles.field__container}>
            <label>{name}</label>
            <input type="text" />
            <Button title="Submit"/>
        </div>
    )
}
