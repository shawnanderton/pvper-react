import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PVPBRACKETS } from '../../enums/blizzard';
import ICharacter from '../../interfaces/ICharacter';
import useFetch from '../../services/useFetch';
import { usePagination } from '../shared/Pagination/paginationContext';
import Spinner from '../shared/Spinner';
import LeaderboardFilter from './LeaderboardFilter/LeaderboardFilter';
import { useLeaderboardFilter } from './LeaderboardFilter/leaderBoardFilterContext';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import LeaderboardTabs from './LeaderboardTabs/LeaderboardTabs';

export default function Leaderboard() {
	const { bracket } = useParams();
	const { pagination, setPagination } = usePagination();
	const { filters } = useLeaderboardFilter();
	const classes = filters.classes.join(',');
	const regions = filters.regions.join(',');
	let { data: characters = [], loading, error, total } = useFetch<ICharacter[]>(
		`/leaderboard/${bracket}?classes=${classes || '0'}&regions=${
			regions || '0'
		}&realm=${filters.realm}&rating=${filters.rating}&_page=${
			pagination.page
		}&_limit=${pagination.limit}`,
	);

	useEffect(() => {
		setPagination((p) => {
			return { ...p, total };
		});
	}, [setPagination, total]);

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
