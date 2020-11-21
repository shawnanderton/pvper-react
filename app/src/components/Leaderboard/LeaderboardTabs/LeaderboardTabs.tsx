import React from 'react';
import { Link } from 'react-router-dom';
import { PVPBRACKETS } from '../../../enums/blizzard';

export default function LeaderboardTabs({ activeBracket }: IProps) {
	const queryParams = new URLSearchParams({ page: '1', limit: '25' });
	return (
		<div className="tabs">
			<ul>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_2v2 ? 'is-active' : ''}
				>
					<Link
						to={{
							pathname: '/leaderboard/2v2',
							search: `?${queryParams.toString()}`,
						}}
					>
						2v2
					</Link>
				</li>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_3v3 ? 'is-active' : ''}
				>
					<Link
						to={{
							pathname: '/leaderboard/3v3',
							search: `?${queryParams.toString()}`,
						}}
					>
						3v3
					</Link>
				</li>
				<li className={activeBracket === PVPBRACKETS.RBG ? 'is-active' : ''}>
					<Link
						to={{
							pathname: '/leaderboard/rbg',
							search: `?${queryParams.toString()}`,
						}}
					>
						RBG
					</Link>
				</li>
			</ul>
		</div>
	);
}

interface IProps {
	activeBracket: string;
}
