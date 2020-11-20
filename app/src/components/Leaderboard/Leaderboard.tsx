import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PVPBRACKETS } from '../../enums/blizzard';
import ICharacter from '../../interfaces/ICharacter';
import { getLeaderBoardSearch } from '../../services/leaderboardSearchService';
import useFetch from '../../services/useFetch';
import { usePagination } from '../shared/Pagination/useContext';
import Spinner from '../shared/Spinner';
import LeaderboardFilter, {
	ILeaderboardFilterOptions,
} from './LeaderboardFilter/LeaderboardFilter';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import LeaderboardTabs from './LeaderboardTabs/LeaderboardTabs';

export default function Leaderboard() {
	const defaultFilter = getLeaderBoardSearch();
	const { bracket } = useParams();
	const [filter, setFilter] = useState<ILeaderboardFilterOptions>(
		defaultFilter,
	);
	const { pagination, setPagination } = usePagination();
	const classes = filter.classes.join(',');
	const regions = filter.regions.join(',');
	let { data: characters = [], loading, error, total } = useFetch<ICharacter[]>(
		`/leaderboard/${bracket}?classes=${classes || '0'}&regions=${
			regions || '0'
		}&realm=${filter.realm}&rating=${filter.rating}&_page=${
			pagination.page
		}&_limit=${pagination.limit}`,
	);
	
	useEffect(() => {
		setPagination((p) => {
			return { ...p, total };
		});
	}, [setPagination, total])
	

	if (error) throw error;
	if (loading) return <Spinner />;
	if (!characters || characters.length === 0) characters = [];

	function handleResetClick() {
		setFilter(defaultFilter);
	}

	function handleFilterSubmit(f: ILeaderboardFilterOptions) {
		setFilter(f);
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
					pvpBracket={bracket as PVPBRACKETS}
				/>
			</div>
		</section>
	);
}
