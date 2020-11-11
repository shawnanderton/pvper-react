import React, { useState } from 'react';

 import './input-range.scss';

export default function InputRange({min= 0, max = 4000, value =0}: IProp) {
	const [currentValue, setCurrentValue] = useState(value);
	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setCurrentValue(parseInt(event.target.value));
	}
	return (
		<section className="range">
			<div className="range-input">
				<input type="range" min={min} max={max} onChange={onChange} name="range" value={currentValue} />
			</div>
			<div className="range-input-value">{currentValue}</div>
		</section>
	);
}

interface IProp {
    min: number;
    max: number;
    value: number;
}