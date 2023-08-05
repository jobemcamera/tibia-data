import MainTitle from "components/MainTitle";
import styles from './CharacterNotFound.module.scss';
export default function CharacterNotFound({ character }) {
  return (
    <section className={styles.container}>
      <MainTitle title='Could not find character' />
      <p>Character <strong>{character}</strong> does not exist.</p>
    </section>
  )
}