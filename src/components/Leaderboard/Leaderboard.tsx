import React from 'react';
import ICharacter from '../../interfaces/ICharacter';
import useFetch from '../../services/useFetch';
import PageNotFound from '../core/PageNotFound';
import Spinner from '../shared/Spinner';
import LeaderboardSearch from './LeaderboardSearch/LeaderboardSearch';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';

export default function Leaderboard() {
	const { data: characters = [], loading, error } = useFetch<ICharacter[]>(
		'/leaderboard?_page=1&_limit=20',
	);

	if (error) throw error;
	if (loading) return <Spinner />;
	if (!characters || characters.length === 0) return <PageNotFound />;

	return (
		<article className="panel is-primary">
			<p className="panel-heading">Leaderboard</p>
			<LeaderboardSearch />
			<p className="panel-tabs is-size-5">
				<a className="is-active" href="!#">
					2v2
				</a>
				<a href="!#">3v3</a>
				<a href="!#">RBG</a>
			</p>
			<div className="panel-block">
				<LeaderboardTable characters={characters} />{' '}
			</div>
		</article>
	);
}
