import React from 'react'
import styles from './Boosted.module.scss'
import MainTitle from 'components/MainTitle'

export default function Boosted({ boosted }) {
    return (
        <div className={styles.boosted__container}>

            <MainTitle title='Boosted Bosses'/>

            <div className={styles.boosted__context}>
                <p className={styles.boosted__text}>Today's boosted boss: <strong>{boosted.name}</strong></p>
                <div className={styles.boosted__container__img}>
                    <img src={boosted.image_url} alt={`Image ${boosted.name}`} className={styles.boosted__img} />
                </div>
            </div>

        </div>
    )
}
