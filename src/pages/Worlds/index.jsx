import Loading from 'components/Loading';
import Records from 'components/Records';
import WorldsList from 'components/Worlds/WorldsList';
import { useWorlds } from 'hooks/useWorlds';
import React from 'react';

export default function Worlds() {
	const { data: worlds, isLoading, isError } = useWorlds();

	const worldsList = worlds?.regular_worlds

	const records = {
		record_players: worlds?.record_players,
		players_online: worlds?.players_online,
		quantity: worlds?.regular_worlds.length
	};

	return (
		<section>
			<Records records={records} isLoading={isLoading} isError={isError} />
			<WorldsList worlds={worldsList} isLoading={isLoading} isError={isError} />
		</section>
	)
}
