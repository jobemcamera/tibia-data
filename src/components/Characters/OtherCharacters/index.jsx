import React from 'react';
import MainTitle from 'components/MainTitle';
import styles from './OtherCharacters.module.scss';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

export default function OtherCharacters({ character }) {
  const navigate = useNavigate();

  const viewOtherCharacters = (event, characterName) => {
    event.preventDefault();

    const formattedNameForURL = characterName.replace(/\s/g, '+');
    navigate(`/characters/${formattedNameForURL}`);
    window.scrollTo(0, 0);
  }

  const renderCharacterInfo = () => {
    if (!character || character.length === 0) {
      return null;
    }

    const getStatusClass = (status) => {
      return status === 'online' ? styles.status_online : styles.status_offline;
    };

    return character.map((info) => (
      <tr key={info.name}>
        <td>{info.name}</td>
        <td>{info.world}</td>
        <td className={getStatusClass(info.status)}>
          {info.status === 'online' ? 'online' : 'offline'}
        </td>
        <td><Button title='View' action={(event) => viewOtherCharacters(event, info.name)} /></td>
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
    { label: '' }
  ];

  return characterInfo;
};
