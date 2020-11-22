import React from 'react';
import Page from './Page';
import { usePagination } from './paginationContext';

export default function Pagination() {
	const { totalPages, firstPage, lastPage, page } = usePagination();
	function getPrevious() {
		if (page !== 1) {
			return (
				<Page
					linkClass="pagination-previous"
					num={page - 1}
					text="Previous"
					isActive={false}
					ariaLabel=""
				/>
			);
		}
		return;
	}
	function getNext() {
		if (page !== totalPages) {
			return (
				<Page
					linkClass="pagination-next"
					num={page + 1}
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
						isActive={i === page}
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
