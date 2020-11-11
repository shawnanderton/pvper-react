import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';

export default function LeaderboardTabs({ activeBracket }: IProps) {
	return (
		<div className="tabs">
			<ul>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_2v2 ? 'is-active' : ''}
				>
					<a href="/#">2v2</a>
				</li>
				<li
					className={activeBracket === PVPBRACKETS.ARENA_3v3 ? 'is-active' : ''}
				>
					<a href="# ">3v3</a>
				</li>
				<li className={activeBracket === PVPBRACKETS.RGB ? 'is-active' : ''}>
					<a href="# ">RGB</a>
				</li>
			</ul>
		</div>
	);
}

interface IProps {
	activeBracket: PVPBRACKETS;
}
