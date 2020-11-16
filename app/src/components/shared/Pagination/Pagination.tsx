import { ftruncate } from 'fs';
import React from 'react';
import Page from './Page';

export default function Pagination({
	activePage,
	total,
	perPage,
	pageRangeDisplayed,
	onChange,
}: IProp) {
  
	let totalPages = Math.ceil(total / perPage);
	let firstPage = Math.max(1, activePage - Math.floor(pageRangeDisplayed / 2));
	let lastPage = Math.min(
		totalPages,
		activePage + Math.floor(pageRangeDisplayed / 2),
	);
	function getPrevious() {
		if ((activePage !== 1)) {
			return (
				<Page
					onClick={onChange}
					linkClass="pagination-previous"
					num={activePage - 1}
					text="Previous"
					isActive={false}
					ariaLabel=""
				/>
			);
		}
		return;
	}
	function getNext() {
		if (activePage !== totalPages) {
			return (
				<Page
					onClick={onChange}
					linkClass="pagination-next"
					num={activePage + 1}
					text="Next"
					isActive={false}
					ariaLabel=""
				/>
			);
		}
	}

	function getPages() {
        const pages = [];
		for (let i = firstPage; i <= lastPage; i++) {
			pages.push(
				<li key={i}>
					<Page
						isActive={i === activePage}
						linkClass="pagination-link"
						text={i + ''}
						num={i}
						onClick={onChange}
						ariaLabel={`Goto page ${i} `}
					/>
				</li>,
			);
        }
		return pages;
	}

	return (
		<nav
			className="pagination is-centered"
			role="navigation"
			aria-label="pagination"
		>
			{getPrevious()}
			{getNext()}
			<ul className="pagination-list">{getPages()}</ul>
		</nav>
	);
}

interface IProp {
	onChange(num: number): void;
	activePage: number;
	total: number;
	perPage: number;
	pageRangeDisplayed: number;
}
