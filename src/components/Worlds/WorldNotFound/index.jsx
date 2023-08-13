import MainTitle from "components/MainTitle";
import styles from './WorldNotFound.module.scss';

export default function WorldNotFound({ world }) {
  return (
    <section className={styles.container}>
      <MainTitle title='Could not find world' />
      <p>World <strong>{world}</strong> does not exist.</p>
    </section>
  )
}