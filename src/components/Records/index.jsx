import React from 'react'
import styles from './Records.module.scss'
import MainTitle from 'components/MainTitle'
import { formatDate } from 'components/SharedFunctions';
import Loading from 'components/Loading';

export default function Records({ records, isLoading, isError }) {
	return (
		<div className={styles.boosted__container}>
			<MainTitle title="World Records" />
			<div className={styles.boosted__context}>
				{isLoading && <Loading />}
				{!isLoading && (
					<>
						<p>
							<strong>Overall Maximum: </strong>
							{formatDigit(records.record_players)}
							{" players on "}
							{formatDate(records.record_date, "MMM DD YYYY, HH:mm:ss z")}
						</p>
						<p>
							<strong>Players Online: </strong>
							{formatDigit(records.players_online)}
						</p>
						<p>
							<strong>Regular Worlds: </strong>
							{records.quantity || 'N/A'}
						</p>
					</>
				)}
				{isError && (
					<p>Server Error!</p>
				)}
			</div>
		</div>
	)
}

function formatDigit(digit) {
	if (typeof digit === 'number') {
		return digit.toLocaleString('en-US', { maximumFractionDigits: 0 });
	}
	return 'N/A';
}
