import React from 'react';
import Page from './Page';
import { usePagination } from './useContext';

export default function Pagination() {
	const { pagination } = usePagination();
	let totalPages = Math.ceil(pagination.total / pagination.limit);
	let firstPage = Math.max(
		1,
		pagination.page - Math.floor(pagination.range / 2),
	);
	let lastPage = Math.min(
		totalPages,
		pagination.page + Math.floor(pagination.range / 2),
	);

	function getPrevious() {
		if (pagination.page !== 1) {
			return (
				<Page
					linkClass="pagination-previous"
					num={pagination.page - 1}
					text="Previous"
					isActive={false}
					ariaLabel=""
				/>
			);
		}
		return;
	}
	function getNext() {
		if (pagination.page !== totalPages) {
			return (
				<Page
					linkClass="pagination-next"
					num={pagination.page + 1}
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
						isActive={i === pagination.page}
						linkClass="pagination-link"
						text={i + ''}
						num={i}
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
	activePage: number;
	total: number;
	perPage: number;
	pageRangeDisplayed: number;
}
