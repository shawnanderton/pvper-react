import React from 'react';
import Pagination from '../../shared/Pagination/Pagination';

export default function LeaderboardTableFooter({ onPageChange, page }: IProps) {
	function handleChange(num: number) {
		onPageChange(num);
	}

	return (
		<tfoot>
			<tr>
				<th colSpan={4}>
					<Pagination
						activePage={page}
						total={1000}
						perPage={25}
						pageRangeDisplayed={4}
						onChange={handleChange}
					/>
				</th>
			</tr>
		</tfoot>
	);
}

interface IProps {
	onPageChange(page: number): void;
	page: number;
}
