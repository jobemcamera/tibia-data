import FieldSearch from "../FieldSearch";
import styles from "./Form.module.scss";

import React from 'react'

export default function Form({ name }) {
    return (
        <section className={styles.form__container}>
            <form className={styles.form}>
                <h2>Search {name}</h2>
                <FieldSearch name={name}/>
            </form>
        </section>
    )
}