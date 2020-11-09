import React from 'react';

export default function Image({ size, filename, type }: IProps) {
	return (
		<figure className={`image is-${size}x${size}`}>
			<img alt="character icon" src={`/images/${filename}.${type}`} />
		</figure>
	);
}

interface IProps {
	filename: string;
	size: number;
	type: string;
}
