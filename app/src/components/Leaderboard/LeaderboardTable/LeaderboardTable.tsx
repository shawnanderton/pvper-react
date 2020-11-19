import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableBody from './LeaderboardTableBody';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableHeader from './LeaderboardTableHeader';

export default function LeaderboardTable({
	characters,
	page,
	onPageChange,
	pvpBracket,
}: Props) {
	return (
		<table className="table is-narrow is-fullwidth">
			<LeaderboardTableHeader />
			<LeaderboardTableBody characters={characters} pvpBracket={pvpBracket} />
			<LeaderboardTableFooter onPageChange={onPageChange} page={page} />
		</table>
	);
}

interface Props {
	characters: ICharacter[];
	onPageChange(page: number): void;
	page: number;
	pvpBracket: PVPBRACKETS;
}
