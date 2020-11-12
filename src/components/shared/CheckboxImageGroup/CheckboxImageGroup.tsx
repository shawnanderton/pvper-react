import React from 'react';
import Checkbox, { IOption } from '../CheckboxImage/CheckboxImage';

import './checkbox-image-group.scss';

export default function CheckboxImageGroup({
	options,
	onChange,
	onSelectAll,
}: IProps) {
	return (
		<section className="checkbox-image-group">
			{options.map((option) => {
				return <Checkbox option={option} onChange={onChange} />;
			})}
			<div className="all">
				<a
					href="!#"
					onClick={(p) => {
						p.preventDefault();
						onSelectAll();
					}}
				>
					All
				</a>
			</div>
		</section>
	);
}

interface IProps {
	options: IOption[];
	onChange(id: number): void;
	onSelectAll(): void;
}
