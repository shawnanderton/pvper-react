import React from 'react';

import './checkbox-image.scss';

export default function Checkbox({ option, onChange }: IProps) {
	return (
		<div key={option.id} className="column is-narrow is-2">
			<input
				onChange={() => onChange(option.id)}
				type="checkbox"
				value={option.value}
				id={`checkbox-${option.value}`}
				checked={option.isChecked}
			/>
			<label htmlFor={`checkbox-${option.value}`}>
				<figure className="image is-24x24">
					<img
						style={{ verticalAlign: 'middle' }}
						src={option.img}
						alt="region us"
					/>
				</figure>
			</label>
		</div>
	);
}

export interface IOption {
	id: number;
	value: string;
	img: string;
	isChecked: boolean;
}
interface IProps {
	option: IOption;
	onChange(id: number): void;
}
