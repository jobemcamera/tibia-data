import React from "react";
import { formatDate } from "components/SharedFunctions";
import styles from "./CharacterInformation.module.scss";
import MainTitle from "components/MainTitle";
import { Link } from "react-router-dom";

function CharacterInformation({ character }) {
  const renderCharacterInfo = () => {
    const characterInfo = [
      { label: "Name", value: character.name },
      {
        label: "Title",
        value: `${character.title} (${character.unlocked_titles} titles unlocked)`,
      },
      character.former_names && {
        label: "Former Names",
        value: character.former_names.join(", "),
      },
      { label: "Sex", value: character.sex },
      { label: "Vocation", value: character.vocation },
      { label: "Level", value: character.level },
      { label: "Achievement Points", value: character.achievement_points },
      {
        label: "World",
        value: (
          <Link to={`/worlds/${character.world.replace(/\s/g, "+")}`}>
            {character.world}
          </Link>
        ),
      },
      { label: "Residence", value: character.residence },
      character.married_to && {
        label: "Married To",
        value: character.married_to,
      },
      {
        label: "Houses",
        value: character.houses
          ? character.houses.map((house) => (
              <div key={house.houseid}>
                <div>
                  {house.name} ({house.town}) is paid until{" "}
                  {formatDate(house.paid, "MMM DD YYYY")}
                </div>
              </div>
            ))
          : null,
      },
      {
        label: "Guild Membership",
        value:
          Object.keys(character.guild).length > 0
            ? `${character.guild.rank} of the ${character.guild.name}`
            : null,
      },
      {
        label: "Last Login",
        value: formatDate(character.last_login, "MMM DD YYYY, HH:mm:ss z"),
      },
      {
        label: "Comment",
        value: character.comment ? (
          <div>
            {character.comment.split("\n").map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </div>
        ) : null,
      },
      { label: "Account Status", value: character.account_status },
    ];

    return characterInfo.map((info) => {
      if (!info || info.value === null) {
        return null;
      }

      if (info.value === character.married_to) {
        return (
          <tr key={info.label}>
            <td>{info.label}:</td>
            <td>
              <Link to={`/characters/${info.value.replace(/\s/g, "+")}`}>
                {info.value}
              </Link>
            </td>
          </tr>
        );
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
        <div className={styles.wrapper}>
          <table>
            <tbody>{character && renderCharacterInfo()}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default CharacterInformation;
