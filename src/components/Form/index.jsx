import MainTitle from "components/MainTitle";
import FieldSearch from "../FieldSearch";
import styles from "./Form.module.scss";

import React from 'react'

export default function Form({ name }) {
    return (
        <section className={styles.form__container}>
            <form>
                <MainTitle title={name}/>
                <FieldSearch name={name}/>
            </form>
        </section>
    )
}
