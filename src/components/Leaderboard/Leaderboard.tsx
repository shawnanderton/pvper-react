import React from 'react';
import { PVPBRACKETS } from '../../enums/blizzard';
import ICharacter from '../../interfaces/ICharacter';
import useFetch from '../../services/useFetch';
import PageNotFound from '../core/PageNotFound';
import Spinner from '../shared/Spinner';
import LeaderboardSearch from './LeaderboardSearch/LeaderboardSearch';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import LeaderboardTabs from './LeaderboardTabs/LeaderboardTabs';

export default function Leaderboard() {
	const { data: characters = [], loading, error } = useFetch<ICharacter[]>(
		'/leaderboard?_page=1&_limit=20',
	);

	if (error) throw error;
	if (loading) return <Spinner />;
	if (!characters || characters.length === 0) return <PageNotFound />;

	return (
		<section className="section">
			<div className="container is-fullHD">
				<h1 className="title">Leaderboard</h1>
				<LeaderboardTabs activeBracket={PVPBRACKETS.ARENA_2v2} />

				<LeaderboardSearch />
				<LeaderboardTable characters={characters} />
			</div>
		</section>
	);
}
