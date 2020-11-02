import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';
import CharacterCard from '../../shared/CharacterCard/CharacterCard';
import PvpProgressBar from '../../shared/PvpProgressBar';

export default function LeaderboardTableRow({ character }: IProps) {
	const bracket = character.brackets?.find((b) => b.name === '3v3');
	const backgroundColor = `has-background-${character.faction}-color`;
	return (
		<tr key={character.blizzardId} className={backgroundColor}>
			<td width="50px" className="has-text-centered has-text-vertical-middle ">
				{bracket?.rank}
			</td>
			<td width="600px">
				<CharacterCard
					character={character}
					imagePath="https://wow.zamimg.com/images/wow/icons/tiny/class_hunter.gif"
					backgroundColor={backgroundColor}
				/>
			</td>
			<td>
				<PvpProgressBar bracket={bracket} />
			</td>
			<td width="50px" className="has-text-centered has-text-vertical-middle ">
				{bracket?.rating}
			</td>
		</tr>
	);
}

interface IProps {
	character: ICharacter;
}
