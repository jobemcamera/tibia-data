import React from 'react'
import styles from './Boosted.module.scss'
import MainTitle from 'components/MainTitle'

export default function Boosted({ boosted = {}, name, text, children }) {
    return (
        <div className={styles.boosted__container}>
                
            <MainTitle title={name}/>

            <div className={styles.boosted__context}>
                <p className={styles.boosted__text}>Today's boosted {text}: <strong>{boosted.name}</strong></p>
                <div className={styles.boosted__container__img}>
                    {children ? children : 
                        <img src={boosted.image_url} alt={`${boosted.name}'s shape`} className={styles.boosted__img} />
                    }
                </div>
            </div>

        </div>
    )
}
