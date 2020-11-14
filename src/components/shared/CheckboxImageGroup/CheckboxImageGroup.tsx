import React from 'react';
import Checkbox, { IOption } from '../CheckboxImage/CheckboxImage';

import './checkbox-image-group.scss';

export default function CheckboxImageGroup({
	options,
	label,
	name,
	selected,
	onChange,
	onAnyClick,
}: IProps) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(name, parseInt(event.target.value));
	}

	function handleAnyClick(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) {
		event.preventDefault();
		onAnyClick(name);
	}

	return (
		<section className="checkbox-image-group">
			<label className="label">{label}</label>
			<section className="columns is-vcentered">
				<div className="column">
					<div className="columns is-multiline is-variable is-1">
						{options?.map((o) => {
							return (
								<Checkbox
									key={o.name}
									option={o}
									isChecked={selected.some((s) => s === o.value)}
									onChange={handleChange}
								/>
							);
						})}
					</div>
				</div>
				<div className="column">
					<a href="!#" onClick={handleAnyClick}>
						Any
					</a>
				</div>
			</section>
		</section>
	);
}

interface IProps {
	label: string;
	name: string;
	options: IOption[] | null;
	selected: number[];
	onChange(name: string, value: number): void;
	onAnyClick(name: string): void;
}
