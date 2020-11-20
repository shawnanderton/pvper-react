import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

export const PaginationContext = React.createContext<{
	pagination: IPagination;
	setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
} | null>(null);

export function PaginationProvider(props: any) {
	const [pagination, setPagination] = useState<IPagination>({
		total: 0,
		page: 1,
		limit: 25,
		range: 4,
	});

	const location = useLocation();
	useEffect(() => {
		const parsed = qs.parse(location.search);
		if (!parsed.page || !parsed.limit) return;
		setPagination((p) => {
			return {
				...p,
				page: parseInt(parsed.page as string),
				limit: parseInt(parsed.limit as string),
			};
		});
	}, [location]);

	const contextValue = {
		pagination,
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
			'useCart must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix this error.',
		);
	}
	return context;
}

export interface IPagination {
	total: number;
	page: number;
	limit: number;
	range: number;
}
