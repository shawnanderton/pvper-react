import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';
import ICharacter from '../../../interfaces/ICharacter';
import { IPvpBracket } from '../../../interfaces/IPvpBracket';
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
						key={character.blizzardId}
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
