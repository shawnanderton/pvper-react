import React, { useState } from 'react';
import { getLeaderBoardSearch } from '../../../services/leaderboardSearchService';
import CheckboxImageGroup from '../../shared/CheckboxImageGroup/CheckboxImageGroup';
import InputRange from '../../shared/InputRange/InputRange';

export default function LeaderboardSearch() {
	const search = getLeaderBoardSearch();
	const [regions, setRegions] = useState(search.regions);
	const [classes, setClasses] = useState(search.classes);

	function handleRegionChange(id: number): void {
		const index = regions.findIndex((r) => r.id === id);
		regions[index].isChecked = !regions[index].isChecked;
		setRegions([...regions]);
	}

	function handleRegionSelectAll() {
		regions.forEach((r) => (r.isChecked = true));
		setRegions([...regions]);
	}
	function handleClassChange(id: number): void {
		setClasses((items) => {
			return items.map((i) =>
				i.id === id ? { ...i, isChecked: !i.isChecked } : i,
			);
		});
	}

	function handleClassSelectAll() {
		setClasses((items) => {
			return items.map((i) => {
				return { ...i, isChecked: true };
			});
		});
	}
	return (
		<section className="section">
			<div className="columns is-0 is-justify-content-center">
				<div className="column">
					<div>
						<p className="heading has-text-centered">Region</p>
						<CheckboxImageGroup
							options={regions}
							onChange={handleRegionChange}
							onSelectAll={handleRegionSelectAll}
						/>
					</div>
				</div>
				<div className="column">
					<p className="heading has-text-centered">Realms</p>
					<div className="field">
						<div className="control">
							<div className="select is-small">
								<select>
									<option>Select dropdown</option>
									<option>With options</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<p className="heading has-text-centered">Classes</p>
					<CheckboxImageGroup
						options={classes}
						onChange={handleClassChange}
						onSelectAll={handleClassSelectAll}
					/>
				</div>
				<div className="column">
					<p className="heading has-text-centered">Rating</p>
					<InputRange min={0} max={4000} value={0} />
				</div>
			</div>
		</section>
	);
}

interface IProps {
	search: {
		classes: string[];
		races: string[];
		region: string;
		realm: string;
		ratingRange: {
			start: number;
			end: number;
		};
	};
}
