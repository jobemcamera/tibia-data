import React from 'react';
import { formatDate } from 'components/SharedFunctions';
import styles from './CharacterTable.module.scss';

function CharacterTable({ character }) {
  const renderCharacterInfo = () => {
    const characterInfo = [
      { label: 'Name', value: character.name },
      { label: 'Title', value: `${character.title} (${character.unlocked_titles} titles unlocked)` },
      { label: 'Sex', value: character.sex },
      { label: 'Vocation', value: character.vocation },
      { label: 'Level', value: character.level },
      { label: 'Achievement Points', value: character.achievement_points },
      { label: 'World', value: character.world },
      { label: 'Residence', value: character.residence },
      {
        label: 'Houses',
        value: character.houses.map((house) => (
          <div key={house.houseid}>
            <div className={styles.label}>{house.name} ({house.town}) is paid until</div>
            <div className={styles.value}>{formatDate(house.paid, 'MMM DD YYYY')}</div>
          </div>
        )),
      },
      {
        label: 'Guild Membership',
        value: `${character.guild.name} of the ${character.guild.rank}`,
      },
      {
        label: 'Last Login',
        value: formatDate(character.last_login, 'MMM DD YYYY, HH:mm:ss z'),
      },
      { label: 'Account Status', value: character.account_status },
      { label: 'Comment', value: character.comment },
    ];

    return characterInfo.map((info) => (
      <tr key={info.label}>
        <td>{info.label}:</td>
        <td>{info.value}</td>
      </tr>
    ));
  };

  return (
    <table className={styles.table}>
      <tbody>
        {character && renderCharacterInfo()}
      </tbody>
    </table>
  );
}

export default CharacterTable;
