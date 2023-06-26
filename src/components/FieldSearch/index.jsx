import Button from "../Button";
import styles from "./FieldSearch.module.scss";
import React, { useRef } from "react";

export default function FieldSearch({ name, onSearch }) {
  const characterInputRef = useRef();

	const handleSubmit = () => {
		const enteredCharacter = characterInputRef.current.value;
		onSearch(enteredCharacter)
	}


  return (
    <div className={styles.field__container}>
      <label>{name}</label>
      <input type="text" ref={characterInputRef} />
      <Button title="Submit" action={handleSubmit}/>
    </div>
  );
}
