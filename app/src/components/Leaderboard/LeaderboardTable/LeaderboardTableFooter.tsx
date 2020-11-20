import React from 'react';
import Pagination from '../../shared/Pagination/Pagination';

export default function LeaderboardTableFooter() {
	return (
		<tfoot>
			<tr>
				<th colSpan={4}>
					<Pagination />
				</th>
			</tr>
		</tfoot>
	);
}
