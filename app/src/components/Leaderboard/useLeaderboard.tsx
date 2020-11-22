import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePagination } from '../shared/Pagination/paginationContext';
import queryString from 'query-string';
import { parse } from 'path';
import useFetch from '../../services/useFetch';
import ICharacter from '../../interfaces/ICharacter';

export default function useLeaderboard() {
	const [url, setUrl] = useState('');
	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(25);
	const [range, setRange] = useState(4);
	const location = useLocation();
	let { data = [], loading, error, total } = useFetch<ICharacter[]>(url);
	const { setPagination } = usePagination();
	useEffect(() => {
		const parsed = queryString.parse(location.search);
		setPage(parseInt((parsed.page as string) || '1'));
		setLimit(parseInt((parsed.limit as string) || '25'));
		setRange(parseInt((parsed.range as string) || '4'));
		setUrl(`${location.pathname}${location.search}`);
		setCharacters(data);
		setPagination({ page, limit, total, range });
	}, [location, data, limit, page, total, range, setPagination]);

	return { characters, loading, error };
}
