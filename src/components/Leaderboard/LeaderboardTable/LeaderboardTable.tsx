import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableBody from './LeaderboardTableBody';
import LeaderboardTableFooter from './LeaderboardTableFooter';
import LeaderboardTableHeader from './LeaderboardTableHeader';

export default function LeaderboardTable({ characters }: Props) {
	return (
		<table className="table is-narrow is-fullwidth">
			<LeaderboardTableHeader />
			<LeaderboardTableBody characters={characters} />
			<LeaderboardTableFooter />
		</table>
	);
}

interface Props {
	characters: ICharacter[];
}
