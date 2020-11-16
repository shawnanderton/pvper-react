import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableBody from './LeaderboardTableBody';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableHeader from './LeaderboardTableHeader';

export default function LeaderboardTable({ characters, page, onPageChange }: Props) {
	return (
		<table className="table is-narrow is-fullwidth">
			<LeaderboardTableHeader />
			<LeaderboardTableBody characters={characters} />
			<LeaderboardTableFooter onPageChange={onPageChange} page={page} />
		</table>
	);
}

interface Props {
	characters: ICharacter[];
	onPageChange(page: number): void;
	page: number;
}
