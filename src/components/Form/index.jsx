import MainTitle from "components/MainTitle";
import React, { useRef } from "react";
import styles from "./Form.module.scss";
import Button from "components/Button";

export default function Form({ name, onSearchCharacter }) {
  const characterInputRef = useRef();

	const handleSubmit = () => {
		const enteredCharacter = characterInputRef.current.value;
    onSearchCharacter(enteredCharacter);
	}

  function sendForm(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.form__container}>
      <MainTitle title={name} />
      <form onSubmit={sendForm}>
        <div className={styles.field__container}>
          <label>{name}</label>
          <input type="text" ref={characterInputRef} />
          <Button title="Submit" action={handleSubmit} />
        </div>
      </form>
    </section>
  );
}
