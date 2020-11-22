import React, { useContext, useState } from 'react';
export const LeaderboardFilterContext = React.createContext<any>(null);
export default function LeaderboardFilterProvider(props: any) {
	const [leaderboardFilters, setLeaderboardFilters] = useState();

	const contextValue = {
		leaderboardFilters,
		setLeaderboardFilters,
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
