import React from 'react';
import MainTitle from 'components/MainTitle';
import styles from './OtherCharacters.module.scss';

export default function OtherCharacters({ character }) {
  const renderCharacterInfo = () => {
    if (!character || character.length === 0) {
      return null;
    }

    return character.map((info) => (
      <tr key={info.name}>
        <td>{info.name}</td>
        <td>{info.world}</td>
        <td>{info.status}</td>
        <td><button>View</button></td>
      </tr>
    ));
  }

  const renderTableHeader = () => {
    const characterInfo = formatCharacterInfo(character);

    return (
      <thead>
        <tr>
          {characterInfo.map((info) => (
            <th key={info.label}>{info.label}</th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <>
      {renderCharacterInfo() && (
        <section className={styles.container}>
          <MainTitle title='Characters' />
          <table>
            {renderTableHeader()}
            <tbody>
              {renderCharacterInfo()}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}

const formatCharacterInfo = (character) => {
  if (!character) {
    return [];
  }

  const characterInfo = [
    { label: 'Name', value: character.name },
    { label: 'World', value: character.world },
    { label: 'Status', value: character.status },
  ];

  return characterInfo;
};
