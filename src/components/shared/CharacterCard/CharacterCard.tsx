import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';

export default function CharacterCard({
	character,
	imagePath,
	backgroundColor,
}: IProps) {
	return (
		<div className={`card ${backgroundColor}`}>
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image is-36x36">
							<img alt="character icon" src={imagePath} />
						</figure>
					</div>
					<div className="media-content character-name has-right-border">
						<small className="is-6 has-text-white">{character.title}</small>
						<br />
						<strong>{character.name}</strong>
					</div>
					<div className="media-content character-info">
						<strong className="is-4 has-text-white">
							{character.itemLevel} ILVL
						</strong>
						<br />
						<small className="is-6 has-text-white {{ classTextColor }}">
							{character.level} {character.race} {character.spec}{' '}
							{character.class} {character.guild}
							{character.realm}
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

interface IProps {
	character: ICharacter;
	imagePath: string;
	backgroundColor: string;
}
