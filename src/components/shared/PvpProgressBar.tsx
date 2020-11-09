import React from 'react';
import { IPvpBracket } from '../../interfaces/IPvpBracket';
import ProgressBar from './ProgressBar';

export default function PvpProgressBar({ bracket }: IProps) {
	return (
		<>
			<div>
				<span className="has-text-success">{bracket?.won}</span>
				{' / '}
				<span className="has-text-danger">{bracket?.lost}</span>
				<span className="is-pulled-right">{bracket?.played}</span>
			</div>
			<ProgressBar
				css="is-pvp-rating"
				value={bracket?.won || 0}
				max={bracket?.played || 0}
			/>
		</>
	);
}

interface IProps {
	bracket?: IPvpBracket;
}
