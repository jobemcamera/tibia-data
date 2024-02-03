import MainTitle from "components/MainTitle";
import styles from './WorldNotFound.module.scss';

export default function WorldNotFound({ world, isError }) {
  const message = isError
    ? (<p>Server Error!</p>)
    : (<p>World <strong>{world}</strong> does not exist.</p>);

  return (
    <section className={styles.container}>
      <MainTitle title='World not found' />
      {message}
    </section>
  )
}