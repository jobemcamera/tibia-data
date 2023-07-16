import React from "react";
import styles from './CharacterAchievements.module.scss';
import MainTitle from "components/MainTitle";

export default function CharacterAchievements({ character }) {

  const renderCharacterInfo = () => {
    const achievements = character || [];
    return achievements.map((achievement, index) => (
      <tr key={index}>
        <td>{achievement.grade}</td>
        <td>
          {achievement.name}
          {achievement.secret ?
            <img className={styles.secret} src="https://static.tibia.com/images/global/general/achievement-secret-symbol.gif" alt="Secret" /> :
            ''}
        </td>
      </tr>
    ));
  };

  return (
    <>
      <section className={styles.container}>
        <MainTitle title="Account Achievements" />
        <table>
          <tbody>
            {character && renderCharacterInfo()}
          </tbody>
        </table>
      </section>
    </>
  );
}