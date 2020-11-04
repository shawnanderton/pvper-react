import React from 'react';
import Checkbox, { IOption } from '../CheckboxImage/CheckboxImage';

export default function CheckboxImageGroup({
	options,
	onChange,
	onSelectAll,
}: IProps) {
	return (
		<div className="columns is-variable is-0 is-align-content-center is-justify-content-center is-multiline ">
			{options.map((option) => {
				return <Checkbox option={option} onChange={onChange} />;
			})}
			<a
				href="!#"
				onClick={(p) => {
					p.preventDefault();
					onSelectAll();
				}}
				className="column is-narrow is-2"
			>
				all
			</a>
		</div>
	);
}

interface IProps {
	options: IOption[];
	onChange(id: number): void;
	onSelectAll(): void;
}
