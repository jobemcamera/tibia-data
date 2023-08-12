import React, { useState } from 'react'
import styles from './WorldsList.module.scss'
import { Link } from 'react-router-dom'
import SelectFilter from 'components/SelectFilter';

export default function WorldsList({ worlds }) {
	const [filters, setFilters] = useState({
		location: '',
		pvp_type: '',
		transfer_type: '',
		battleye_date: ''
	});

	const handleFilterChange = (event) => {
		const { name, value } = event.target;
		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: value,
		}));
	};

	const filteredWorlds = worlds.filter((world) => {
		const isLocationMatched = filters.location === '' || filters.location === world.location;
		const isPvpTypeMatched = filters.pvp_type === '' || filters.pvp_type === world.pvp_type;
		const isTransferTypeMatched = filters.transfer_type === '' || filters.transfer_type === world.transfer_type;

		return isLocationMatched && isPvpTypeMatched && isTransferTypeMatched;
	});

	const options = {
		location: ["", "Europe", "South America", "North America"],
		pvp_type: ["", "Open PvP", "Optional PvP", "Hardcore PvP", "Retro Open PvP", "Retro Hardcore PvP"],
		transfer_type: ["", "regular", "blocked", "locked"],
	}

	// Function to show the world's location + location's flag (Europe = UK, South America = Brazil, North America = USA)
	function worldLocation(location) {
		if (location === 'Europe') {
			return (
				<div className={styles.flags}>
					<p>{location}</p>
					<img src="https://www.bandeirasnacionais.com/data/flags/w580/gb.webp" alt="The flag of The United Kingdom" title='England' />
				</div>
			);
		} else if (location === 'South America') {
			return (
				<div className={styles.flags}>
					<p>{location}</p>
					<img src="https://www.bandeirasnacionais.com/data/flags/w580/br.webp" alt="The flag of Brazil" title='Brazil' />
				</div>
			);
		} else if (location === 'North America') {
			return (
				<div className={styles.flags}>
					<p>{location}</p>
					<img src="https://www.bandeirasnacionais.com/data/flags/w580/us.webp" alt='The flag of The United States of America' title='USA' />
				</div>
			);
		} else {
			return null;
		}
	}

	// Function to show the BattlEye type (green, yellow or nothing)
	function battleyeType(date) {
		if (date === "release") {
			return (
				<img src={'https://static.tibia.com/images/global/content/icon_battleyeinitial.gif'} alt='Green BattlEye icon' />
			);
		} else if (date === "") {
			return (
				<p></p>
			);
		} else {
			return (
				<img src={'https://static.tibia.com/images/global/content/icon_battleye.gif'} alt='Yellow BattlEye icon' />
			);
		}
	}

	return (
		<>
			<section>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>World</th>
							<th>Online</th>
							<th>
								<div className={styles.options__container}>
									<span>Location </span>
									<SelectFilter
										filters={filters}
										handleFilterChange={handleFilterChange}
										options={options.location}
										info="location"
									/>
								</div>
							</th>
							<th >
								<div className={styles.options__container}>
									<span>PvP Type </span>
									<SelectFilter
										filters={filters}
										handleFilterChange={handleFilterChange}
										options={options.pvp_type}
										info="pvp_type"
									/>
								</div>
							</th>
							<th >
								<div className={styles.options__container}>
									<span>Transfer Type </span>
									<SelectFilter
										filters={filters}
										handleFilterChange={handleFilterChange}
										options={options.transfer_type}
										info="transfer_type"
									/>
								</div>
							</th>
							<th>
								<span>BattlEye </span>
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredWorlds.length > 0 ? filteredWorlds.map(world => (
							<tr key={world.name}>
								<td>
									<Link to={world.name}>
										{world.name}
									</Link>
								</td>
								<td>{world.players_online}</td>
								<td>{worldLocation(world.location)}</td>
								<td>{world.pvp_type}</td>
								<td>{world.transfer_type}</td>
								<td>{battleyeType(world.battleye_date)}</td>
							</tr>
						)) : (
							<tr>
								<td colSpan={6} className={styles.not__found}>Not found</td>
							</tr>
						)
						}
					</tbody>
				</table>
			</section>
		</>
	)
}
