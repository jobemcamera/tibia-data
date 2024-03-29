import MainTitle from "components/MainTitle";
import React, { useState } from "react";
import styles from "./Form.module.scss";
import Button from "components/Button";

export default function Form({ name, onSearchCharacter }) {
  const [characterName, setCharacterName] = useState('');

  const handleSubmit = () => {
    onSearchCharacter(characterName);
    setCharacterName('');
  };

  function sendForm(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.container}>
      <MainTitle title={name} />
      <form onSubmit={sendForm}>
        <div className={styles.inputLabel}>
          <label>Character Name</label>
          <input
            type="text"
            value={characterName}
            placeholder="Enter the character name"
            onChange={(e) => setCharacterName(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <Button title="Submit" action={handleSubmit} />
        </div>
      </form>
    </section>
  );
}
