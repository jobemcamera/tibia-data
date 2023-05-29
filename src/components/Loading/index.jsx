import React from 'react'
import styles from './Loading.module.scss'
import loading from '../../assets/svg/loading-svgrepo-com.svg'

export default function Loader() {
    return (
        <div className={styles.loader__container}>
            <img src={loading} alt="Loading" className={styles.loader__svg}/>
        </div>
    )
}
