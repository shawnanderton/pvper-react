import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ICharacter from '../../interfaces/ICharacter';
import { getLeaderBoardSearch } from '../../services/leaderboardSearchService';
import useFetch from '../../services/useFetch';
import PageNotFound from '../core/PageNotFound';
import Spinner from '../shared/Spinner';
import LeaderboardFilter, {
	ILeaderboardFilterOptions,
} from './LeaderboardSearch/LeaderboardFilter';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import LeaderboardTabs from './LeaderboardTabs/LeaderboardTabs';

export default function Leaderboard() {
	const defaultFilter = getLeaderBoardSearch();
	const { bracket } = useParams();
	const [filter, setFilter] = useState<ILeaderboardFilterOptions>(
		defaultFilter,
	);
	const [page, setPage] = useState<number>(1);
	const classes = filter.classes.join(',');
	const regions = filter.regions.join(',');
	let { data: characters = [], loading, error } = useFetch<ICharacter[]>(
		`/leaderboard?classes=${classes}&regions=${regions}&realm=${filter.realm}&rating=${filter.rating}&_page=${page}&_limit=20`,
	);

	if (error) throw error;
	if (loading) return <Spinner />;
	if (!characters || characters.length === 0) characters = [];

	function handleResetClick() {
		setFilter(defaultFilter);
	}

	function handleFilterSubmit(f: ILeaderboardFilterOptions) {
		setFilter(f);
	}

	function handlePageChange(page: number) {
		setPage(page);
	}

	return (
		<section className="section">
			<div className="container is-fullHD">
				<h1 className="title">Leaderboard</h1>
				<LeaderboardTabs activeBracket={bracket} />

				<LeaderboardFilter
					defaultFilter={filter}
					onResetClick={handleResetClick}
					onFilterSubmit={handleFilterSubmit}
				/>
				<LeaderboardTable
					characters={characters}
					onPageChange={handlePageChange}
					page={page}
				/>
			</div>
		</section>
	);
}
