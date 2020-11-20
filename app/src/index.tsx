import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/core/App';
import { PaginationProvider } from './components/shared/Pagination/useContext';

import './index.scss';

ReactDOM.render(
	<BrowserRouter>
		<PaginationProvider>
			<App />
		</PaginationProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);
