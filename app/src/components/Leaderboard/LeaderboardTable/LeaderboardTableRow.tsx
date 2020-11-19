import React from 'react';
import { PVPBRACKETS } from '../../../enums/blizzard';
import ICharacter from '../../../interfaces/ICharacter';
import { IPvpBracket } from '../../../interfaces/IPvpBracket';
import CharacterCard from '../../shared/CharacterCard/CharacterCard';
import PvpProgressBar from '../../shared/PvpProgressBar';

export default function LeaderboardTableRow({ character, pvpBracket }: IProps) {
	const bracket: IPvpBracket = character[`current_${pvpBracket}`] as IPvpBracket;
	const backgroundColor = `has-background-${character.faction}-color`;
	return (
		<tr className={backgroundColor}>
			<td width="50px" className="has-text-centered has-text-vertical-middle ">
				{bracket?.rank}
			</td>
			<td width="500px">
				<CharacterCard
					character={character}
					backgroundColor={backgroundColor}
				/>
			</td>
			<td>
				<PvpProgressBar bracket={bracket} />
			</td>
			<td width="200px" className="has-text-centered has-text-vertical-middle ">
				{bracket?.rating}
			</td>
		</tr>
	);
}

interface IProps {
	character: ICharacter;
	pvpBracket: PVPBRACKETS;
}
