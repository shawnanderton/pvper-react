import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableRow from './LeaderboardTableRow';

export default function LeaderboardTableBody({ characters }: Props) {
	return (
		<tbody>
			{characters.map((character: ICharacter) => {
				return <LeaderboardTableRow character={character}></LeaderboardTableRow>;
			})}
		</tbody>
	);
}

interface Props {
    characters: ICharacter[];
}