import Loading from 'components/Loading';
import Records from 'components/Records';
import WorldsList from 'components/Worlds/WorldsList';
import React, { useEffect, useState } from 'react';

export default function Worlds() {

	const [records, setRecords] = useState([]);
	const [worlds, setWorlds] = useState([]);
	const [isLoading, setIsLoading] = useState(true)

	// Records
	useEffect(() => {
		const records = async () => {
			const response = await fetch('https://api.tibiadata.com/v3/worlds');
			const jsonData = await response.json();
			setRecords(jsonData.worlds);
			setIsLoading(false)
		};

		records();

	}, [])

	// Worlds
	useEffect(() => {
		const worlds = async () => {
			const response = await fetch('https://api.tibiadata.com/v3/worlds');
			const jsonData = await response.json();
			setWorlds(jsonData.worlds.regular_worlds);
			setIsLoading(false)
		};

		worlds();

	}, []);

	return (
		<>
			<Records records={records}>
				{isLoading && <Loading />}
			</Records>
			<WorldsList worlds={worlds} isLoading={isLoading} />
		</>
	)
}
