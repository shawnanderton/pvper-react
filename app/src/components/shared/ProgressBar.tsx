import React from 'react';

export default function ProgressBar({ css, value, max }: IProgressValues) {
	return (
		<progress className={`progress ${css}`} value={value} max={max}></progress>
	);
}

interface IProgressValues {
	css: string;
	value: number;
	max: number;
}
