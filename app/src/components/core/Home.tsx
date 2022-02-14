import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<section className="section">
				<div className="container">
					<h1 className="title">PVPER</h1>
					<h2 className="subtitle">A World of Warcraft PVP website.</h2>
				</div>
			</section>

			<section className="section">
				<h1 className="subtitle">Checkout The Leaderboard</h1>

				<ul className="list">
					<li className="list-item">
						<Link
							to={{
								pathname: '/leaderboard/2v2',
								search: '?page=1&limit=25',
							}}
						>
							Arena 2v2
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={{ pathname: '/leaderboard/3v3', search: '?page=1&limit=25' }}
							className="list-item"
						>
							Arena 3v3
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={{ pathname: '/leaderboard/rbg', search: '?page=1&limit=25' }}
							className="list-item"
						>
							RBG
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
}
