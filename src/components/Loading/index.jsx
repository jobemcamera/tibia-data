import React from 'react'
import styles from './Loading.module.scss'
import loading from '../../assets/svg/loading-svgrepo-com.svg'

export default function Loading() {
	return (
		<div className={styles.container}>
			<img src={loading} alt="Loading" />
		</div>
	)
}
