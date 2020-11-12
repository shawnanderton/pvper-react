import React, { useState } from 'react';

import './input-range.scss';

export default function InputRange({
	min = 0,
	max = 4000,
	value = 0,
	label,
	onChange,
}: IProp) {
	return (
		<section className="range">
			<div className="range-input">
				<label>
					<span>{label}</span> <span className="is-pulled-right">{value}</span>
				</label>
				<input
					className="has-background-dark"
					type="range"
					min={min}
					max={max}
					onChange={onChange}
					name="range"
					value={value}
				/>
			</div>
		</section>
	);
}

interface IProp {
	min: number;
	max: number;
	value: number;
	label: string;
	onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
