import React from 'react';

export default function LeaderboardTableHeader() {
	return (
		<thead>
			<tr>
				<th className="has-text-centered is-uppercase has-text-weight-bold">
					Rank
				</th>
				<th className="has-text-centered is-uppercase has-text-weight-bold">
					Name
				</th>
				<th className="has-text-centered is-uppercase has-text-weight-bold">
					wins/lost
				</th>
				<th className="has-text-centered is-uppercase has-text-weight-bold">
					Ratings
				</th>
			</tr>
		</thead>
	);
}
