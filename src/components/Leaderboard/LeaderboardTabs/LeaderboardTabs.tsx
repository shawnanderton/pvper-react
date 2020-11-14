import React from 'react';
import { Link } from 'react-router-dom';
import { PVPBRACKETS } from '../../../enums/blizzard';

export default function LeaderboardTabs({ activeBracket }: IProps) {
	return (
		<div className="tabs">
			<ul>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_2v2 ? 'is-active' : ''}
				>
					<Link to="/leaderboard/2v2">2v2</Link>
				</li>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_3v3 ? 'is-active' : ''}
				>
					<Link to="/leaderboard/3v3">3v3</Link>
				</li>
				<li className={activeBracket === PVPBRACKETS.RBG ? 'is-active' : ''}>
					<Link to="/leaderboard/rbg">RBG</Link>
				</li>
			</ul>
		</div>
	);
}

interface IProps {
	activeBracket: string;
}
