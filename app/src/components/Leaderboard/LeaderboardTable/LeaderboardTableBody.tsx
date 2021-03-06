import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';
import ICharacter from '../../../interfaces/ICharacter';
import LeaderboardTableRow from './LeaderboardTableRow';

export default function LeaderboardTableBody({
	characters,
	pvpBracket,
}: Props) {
	return (
		<tbody>
			{characters.map((character: ICharacter) => {
				return (
					<LeaderboardTableRow
						key={character.id}
						character={character}
						pvpBracket={pvpBracket}
					/>
				);
			})}
		</tbody>
	);
}

interface Props {
	characters: ICharacter[];
	pvpBracket: PVPBRACKETS;
}
