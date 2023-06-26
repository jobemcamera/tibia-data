import MainTitle from "components/MainTitle";
import React from "react";
import styles from "./Form.module.scss";
import FieldSearch from "components/FieldSearch";

export default function Form({ name, onSearchCharacter }) {
  function sendForm(event) {
    event.preventDefault();
  }

  const searchHandler = (enteredCharacter) => {
    onSearchCharacter(enteredCharacter);
  };

  return (
    <section className={styles.form__container}>
      <MainTitle title={name} />
      <form onSubmit={sendForm}>
        <FieldSearch name={name} onSearch={searchHandler} />
      </form>
    </section>
  );
}
