import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

export const LeaderboardFilterContext = React.createContext<{
	filters: ILeaderboardFilter;
	setFilters: React.Dispatch<React.SetStateAction<ILeaderboardFilter>>;
} | null>(null);

export function LeaderboardFilterProvider(props: any) {
	const location = useLocation();
	const [filters, setFilters] = useState<ILeaderboardFilter>({
		regions: [],
		classes: [],
		realm: '',
		rating: 0,
	});

	useEffect(() => {
		const parsed = qs.parse(location.search);
		const regions: string = parsed.regions as string;
		const classes: string = parsed.classes as string;
		setFilters((f) => {
			return {
				...f,
				regions: regions?.split('_') || [],
				classes: classes?.split('_') || [],
				realm: (parsed.realm as string) || '',
				rating: parseInt((parsed.rating as string) || '0'),
			};
		});
	}, [location]);

	const contextValue = {
		filters,
		setFilters,
	};
	return (
		<LeaderboardFilterContext.Provider value={contextValue}>
			{props.children}
		</LeaderboardFilterContext.Provider>
	);
}

export function useLeaderboardFilter() {
	const context = useContext(LeaderboardFilterContext);
	if (!context) {
		throw new Error(
			'useLeaderboardFilter must be used within a LeaderboardFilterProvider. Wrap a parent component in <LeaderboardFilterProvider> to fix this error.',
		);
	}
	return context;
}

export interface ILeaderboardFilter {
	[key: string]: string[] | number | string | null;
	regions: string[];
	classes: string[];
	realm: string;
	rating: number;
}
