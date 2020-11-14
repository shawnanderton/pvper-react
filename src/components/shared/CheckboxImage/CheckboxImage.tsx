import React from 'react';

import './checkbox-image.scss';

export default function Checkbox({ option, isChecked, onChange }: IProps) {
	return (
		<div key={option.value} className="checkbox-image column">
			<input
				onChange={onChange}
				type="checkbox"
				value={option.value}
				id={`checkbox-${option.name}`}
				checked={isChecked}
			/>
			<label htmlFor={`checkbox-${option.name}`}>
				<figure className={`image is-${option.size}`}>
					<img src={option.img} alt="region us" />
				</figure>
			</label>
		</div>
	);
}

export interface IOption {
	value: number;
	name: string;
	img: string;
	size: string;
	isChecked: boolean;
}
interface IProps {
	option: IOption;
	isChecked: boolean;
	onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
