import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../services/useFetch';
import Spinner from './shared/Spinner';

export default function UpdateCharacters() {
	const [offset, setOffset] = useState(1);
	const { bracket } = useParams();
	let { loading, error } = useFetch<any>(
		`/leaderboard-update/${bracket}?_offset=${offset}&_limit=100`,
	);
	if (error) throw error;
	if (loading) {
		debugger;
		return <Spinner />;
	}

	return (
		<div>
			<button onClick={() => setOffset((n) => ++n)}>{offset}</button>
		</div>
	);
}
