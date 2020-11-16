import React from 'react';
import ASide from './ASide';
import Main from './Main';

export default function Body() {
	return (
		<div className="container is-fullHD">
			<div className="section columns">
				<Main />
				<ASide />
			</div>
		</div>
	);
}
