import Form from 'components/Form'
import React, { useState } from 'react'

export default function Characters() {

    const [characaters, setCharcters] = useState('');

    const searchCharacterHandler = (enteredCharacter) => {

        if (enteredCharacter.trim().length === 0) {
            console.log('vazio')
            return;
        }

        setCharcters(enteredCharacter);
        console.log(enteredCharacter)
    }

    return (
        <>
            <Form name="Search Character" onSearchCharacter={searchCharacterHandler}/>
        </>
    )
}
