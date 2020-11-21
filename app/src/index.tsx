import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/core/App';
import { LeaderboardFilterProvider } from './components/Leaderboard/LeaderboardFilter/leaderBoardFilterContext';
import { PaginationProvider } from './components/shared/Pagination/paginationContext';

import './index.scss';

ReactDOM.render(
	<BrowserRouter>
		<PaginationProvider>
			<LeaderboardFilterProvider>
				<App />
			</LeaderboardFilterProvider>
		</PaginationProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);
