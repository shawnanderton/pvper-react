import React, { useContext, useEffect, useState } from 'react';

export const PaginationContext = React.createContext<any>(null);

export function PaginationProvider(props: any) {
	const [totalPages, setTotalPages] = useState(0);
	const [firstPage, setFirstPage] = useState(0);
	const [lastPage, setLastPage] = useState(0);
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState({
		page: 1,
		total: 0,
		limit: 25,
		range: 4,
	});

	useEffect(() => {
		function init() {
			const total = Math.ceil(pagination.total / pagination.limit);
			setTotalPages(total);
			setFirstPage(
				Math.max(1, pagination.page - Math.floor(pagination.range / 2)),
			);
			setLastPage(
				Math.min(total, pagination.page + Math.floor(pagination.range / 2)),
			);
			setPage(pagination.page);
		}
		init();
	}, [pagination, totalPages, firstPage, lastPage, page]);
	const contextValue = {
		totalPages,
		firstPage,
		lastPage,
		page,
		setPagination,
	};
	return (
		<PaginationContext.Provider value={contextValue}>
			{props.children}
		</PaginationContext.Provider>
	);
}

export function usePagination() {
	const context = useContext(PaginationContext);
	if (!context) {
		throw new Error(
			'usePagination must be used within a  PaginationProvider. Wrap a parent component in <PaginationProvider> to fix this error.',
		);
	}
	return context;
}
export interface IPagination {
	page: number;
	total: number;
	limit: number;
	range: number;
}
