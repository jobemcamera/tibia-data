import React from "react";
import styles from './CharacterAchievements.module.scss';
import MainTitle from "components/MainTitle";

export default function CharacterAchievements({ character }) {

  const renderCharacterInfo = () => {
    const achievements = character || [];

    return achievements.map((achievement, index) => (
      <tr key={index}>
        <td>
          {Array.from({ length: achievement.grade }, (_, i) => (
            <img
              key={i}
              className={styles.grade}
              src="https://static.tibia.com/images/global/general/achievement-grade-symbol.gif"
              alt="Achievement Grade Symbol"
            />
          ))}
        </td>
        <td>
          {achievement.name}
          {achievement.secret ?
            <img
              className={styles.secret}
              src="https://static.tibia.com/images/global/general/achievement-secret-symbol.gif"
              alt="Achievement Secret Symbol" /> :
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
            {character ? renderCharacterInfo() : (
              <tr>
                <td colSpan="2" style={{ fontWeight: 'normal' }}>There are no achievements set to be displayed for this character.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
