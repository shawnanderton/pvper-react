import React from 'react';
import IconSelect from '../../shared/IconSelect/IconSelect';

export default function LeaderboardSearch() {
	return (
		<section className="section">
			<div className="columns is-0 is-justify-content-center">
				<div className="column">
					<div>
						<p className="heading has-text-centered">Region</p>
						<div className="columns is-1 is-justify-content-center">
							<IconSelect names={['/images/region_us', '/images/region_eu']} type="png" />
						</div>
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
				</div>
				<div className="column">
					<p className="heading has-text-centered">Specs</p>
				</div>
				<div className="column">
					<p className="heading has-text-centered">Rating</p>
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
