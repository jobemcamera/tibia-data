import React from 'react';
import { formatDate } from 'components/SharedFunctions';
import styles from './CharacterTable.module.scss';
import MainTitle from 'components/MainTitle';

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
      character.married_to && { label: 'Married To', value: character.married_to },
      {
        label: 'Houses',
        value: character.houses.map((house) => (
          <div key={house.houseid}>
            <div>{house.name} ({house.town}) is paid until {formatDate(house.paid, 'MMM DD YYYY')}</div>
          </div>
        )),
      },
      {
        label: 'Guild Membership',
        value: `${character.guild.rank} of the ${character.guild.name}`,
      },
      {
        label: 'Last Login',
        value: formatDate(character.last_login, 'MMM DD YYYY, HH:mm:ss z'),
      },
      {
        label: 'Comment', value: (
          <div>
            {character.comment.split('\n').map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </div>
        )
      },
      { label: 'Account Status', value: character.account_status },
    ];


    return characterInfo.map((info) => {
      if (!info) {
        return null;
      }

      return (
        <tr key={info.label}>
          <td>{info.label}:</td>
          <td>{info.value}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <section className={styles.container}>
        <MainTitle title="Character Information" />
        <table>
          <tbody>
            {character && renderCharacterInfo()}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default CharacterTable;
