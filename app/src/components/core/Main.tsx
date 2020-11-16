import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from '../Leaderboard/Leaderboard';
import Home from './Home';

export default function Main() {
	return (
		<main className="column is-10">
			<div className="container">
				<Routes>
					<Route path="/leaderboard/:bracket" element={<Leaderboard />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</main>
	);
}
