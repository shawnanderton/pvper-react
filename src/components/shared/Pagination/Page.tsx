import React from 'react';

export default function Page({
	text,
	num,
	isActive,
	linkClass,
	ariaLabel,
	onClick,
}: IProp) {
	function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault();
		onClick(num);
	}
	return (
		<a
			className={`${linkClass} ${isActive ? 'is-current' : ''}`}
			href="# "
			aria-label={ariaLabel}
			onClick={handleClick}
		>
			{text}
		</a>
	);
}

interface IProp {
	text: string;
	num: number;
	isActive: boolean;
	linkClass: string;
	ariaLabel: string;
	onClick(num: number): void;
}
