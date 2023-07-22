import React from "react";
import MainTitle from "components/MainTitle";
import { formatDate } from "components/SharedFunctions";
import styles from './AccountInformation.module.scss';

export default function AccountInformation({ character }) {
  const renderCharacterInfo = () => {
    if (Object.keys(character).length == 0) {
      return;
    }

    const characterInfo = [
      { label: 'Loyalty Title', value: character.loyalty_title },
      { label: 'Created', value: formatDate(character.created, 'MMM DD YYYY, HH:mm:ss z') },
    ]

    return characterInfo.map((info) => {
      if (!info || info.value === null) {
        return null;
      }

      return (
        <tr key={info.label}>
          <td>{info.label}:</td>
          <td>{info.value}</td>
        </tr>
      );
    });
  }

  return (
    <>
      {renderCharacterInfo() &&
        <section className={styles.container}>
          <MainTitle title="Account Information" />
          <table>
            <tbody>
              {renderCharacterInfo()}
            </tbody>
          </table>
        </section>
      }
    </>
  );
}
