import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableBody from './LeaderboardTableBody';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableHeader from './LeaderboardTableHeader';

export default function LeaderboardTable({ characters, pvpBracket }: Props) {
	return (
		<table className="table is-narrow is-fullwidth">
			<LeaderboardTableHeader />
			<LeaderboardTableBody characters={characters} pvpBracket={pvpBracket} />
			<LeaderboardTableFooter />
		</table>
	);
}

interface Props {
	characters: ICharacter[];
	pvpBracket: PVPBRACKETS;
}
