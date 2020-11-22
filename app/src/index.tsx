import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PaginationProvider } from './components/shared/Pagination/paginationContext';

import App from './components/core/App';
import './index.scss';

ReactDOM.render(
	<BrowserRouter>
		<PaginationProvider>
			<App />
		</PaginationProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);
