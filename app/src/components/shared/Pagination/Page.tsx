import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Page({
	text,
	num,
	isActive,
	linkClass,
	ariaLabel,
}: IProp) {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	queryParams.set('page', num.toString());

	return (
		<Link
			className={`${linkClass} ${isActive ? 'is-current' : ''}`}
			to={{ pathname: location.pathname, search: `?${queryParams.toString()}` }}
		>
			{text}
		</Link>
	);
}

interface IProp {
	text: string;
	num: number;
	isActive: boolean;
	linkClass: string;
	ariaLabel: string;
}
