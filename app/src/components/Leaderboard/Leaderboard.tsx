import React from 'react';
import { useParams } from 'react-router-dom';
import { PVPBRACKETS } from '../../enums/blizzard';
import Spinner from '../shared/Spinner';
import LeaderboardFilter from './LeaderboardFilter/LeaderboardFilter';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import LeaderboardTabs from './LeaderboardTabs/LeaderboardTabs';
import useLeaderboard from './useLeaderboard';

export default function Leaderboard() {
	const { bracket } = useParams();
	let { characters, loading, error } = useLeaderboard();

	if (error) throw error;
	if (loading) return <Spinner />;
	if (!characters || characters.length === 0) characters = [];

	return (
		<section className="section">
			<div className="container is-fullHD">
				<h1 className="title">Leaderboard</h1>
				<LeaderboardTabs activeBracket={bracket} />

				<LeaderboardFilter />
				<LeaderboardTable
					characters={characters}
					pvpBracket={bracket as PVPBRACKETS}
				/>
			</div>
		</section>
	);
}
