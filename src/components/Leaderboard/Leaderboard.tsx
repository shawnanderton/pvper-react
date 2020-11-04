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
		<section className="section">
			<div className="container">
				<h1 className="title">Leaderboard</h1>
				<LeaderboardSearch />
				<div className="tabs is-centered">
					<ul>
						<li className="is-active">
							<a href="/">2v2</a>
						</li>
						<li>
							<a href="/">3v3</a>
						</li>
						<li>
							<a href="/">RGB</a>
						</li>
					</ul>
				</div>
				<LeaderboardTable characters={characters} />
			</div>
		</section>
	);
}
