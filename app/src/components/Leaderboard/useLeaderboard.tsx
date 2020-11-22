import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePagination } from '../shared/Pagination/paginationContext';
import queryString from 'query-string';
import useFetch from '../../services/useFetch';
import ICharacter from '../../interfaces/ICharacter';
import { useLeaderboardFilter } from './LeaderboardFilter/leaderboardFilterContext';

export default function useLeaderboard() {
	const [url, setUrl] = useState('');
	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(25);
	const [range, setRange] = useState(4);
	const location = useLocation();
	let { data = [], loading, error, total } = useFetch<ICharacter[]>(url);
	const { setPagination } = usePagination();
	const { setLeaderboardFilters } = useLeaderboardFilter();
	useEffect(() => {
		const parsed = queryString.parse(location.search);
		setPage(parseInt((parsed.page as string) || '1'));
		setLimit(parseInt((parsed.limit as string) || '25'));
		setRange(parseInt((parsed.range as string) || '4'));
		setUrl(`${location.pathname}${location.search}`);
		setCharacters(data);
		setPagination({ page, limit, total, range });
		setLeaderboardFilters(getFilters(parsed));
	}, [
		location,
		data,
		limit,
		page,
		total,
		range,
		setPagination,
		setLeaderboardFilters,
	]);

	return { characters, loading, error };
}

function getFilters(parsed: any) {
	const classes = parsed?.classes?.split('_') ?? [];
	const regions = parsed?.regions?.split('_') ?? [];
	const realm = parsed?.realm ?? '';
	const rating = parsed?.ranting ?? 0;
	return { classes, regions, realm, rating };
}
