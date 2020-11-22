import React from 'react';
import ICharacter from '../../../interfaces/ICharacter';
import Image from '../Image/Image';

import './character-card.scss';

export default function CharacterCard({ character, backgroundColor }: IProps) {
	const classSlug = character.class.toLowerCase().replace(/\s+/g, '-');
	return (
		<div className={`card character-card ${backgroundColor}`}>
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<Image filename={classSlug} type="jpg" size={32} />
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
						<small className="is-6 has-text-white">
							{character.level} {character.race} {character.spec}{' '}
							<span className={`color-${classSlug}`}>{character.class}</span>
							{`<${character.guild ?? ''}>`}
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
	backgroundColor: string;
}
