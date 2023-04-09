import FieldSearch from "../FieldSearch";
import styles from "./Form.module.scss";

import React from 'react'

export default function Form() {
    return (
        <section className={styles.form__container}>
            <form className={styles.form}>
                <h2>Search Creature</h2>
                <FieldSearch />
            </form>
        </section>
    )
}
