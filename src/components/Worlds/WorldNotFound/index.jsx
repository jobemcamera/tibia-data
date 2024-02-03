import MainTitle from "components/MainTitle";
import styles from './WorldNotFound.module.scss';
import Button from "components/Button";

export default function WorldNotFound({ world, isError, action }) {
  const message = isError
    ? (<p>Server Error!</p>)
    : (<p>World <strong>{world}</strong> does not exist.</p>);

  return (
    <section className={styles.container}>
      <MainTitle title='World not found' >
        <Button title="Back" action={action} />
      </MainTitle>
      {message}
    </section>
  )
}