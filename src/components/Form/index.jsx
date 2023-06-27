import MainTitle from "components/MainTitle";
import React, { useRef } from "react";
import styles from "./Form.module.scss";
import Button from "components/Button";

export default function Form({ name, validField, onSearchCharacter }) {
  const characterInputRef = useRef();

  const handleSubmit = () => {
    const enteredCharacter = characterInputRef.current.value;
    onSearchCharacter(enteredCharacter);
  };

  function sendForm(event) {
    event.preventDefault();
  }

  const inputStyle = `${styles.field__container__input} ${
    validField ? styles.invalid : ""
  }`;

  return (
    <section className={styles.form__container}>
      <MainTitle title={name} />
      <form onSubmit={sendForm}>
        <div className={styles.field__container}>
          <label className={styles.field__container__label}>{name}</label>
          <input type="text" ref={characterInputRef} className={inputStyle} />
          <Button title="Submit" action={handleSubmit} />
        </div>
      </form>
    </section>
  );
}
