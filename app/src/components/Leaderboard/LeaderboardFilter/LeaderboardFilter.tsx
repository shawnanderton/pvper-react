import React, { useState } from 'react';
import useFetch from '../../../services/useFetch';
import { IOption } from '../../shared/CheckboxImage/CheckboxImage';
import CheckboxImageGroup from '../../shared/CheckboxImageGroup/CheckboxImageGroup';
import InputRange from '../../shared/InputRange/InputRange';
import Select, { ISelectOptions } from '../../shared/Select/Select';
import Spinner from '../../shared/Spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import './leaderboard-filter.scss';
import { useLeaderboardFilter } from './leaderboardFilterContext';

export default function LeaderboardSearch() {
	const navigate = useNavigate();
	const location = useLocation();
	const { leaderboardFilters } = useLeaderboardFilter();
	const [filters, setFilters] = useState<ILeaderboardFilter>(
		leaderboardFilters,
	);
	const {
		data: regions,
		loading: loadingRegions,
		error: errorRegions,
	} = useFetch<IOption[]>('/regions');

	const {
		data: classes,
		loading: loadingClasses,
		error: errorClasses,
	} = useFetch<IOption[]>('/classes');
	const { data: realms, loading: loadingRealms, error: errorRealms } = useFetch<
		ISelectOptions[]
	>('/realms');

	if (errorClasses || errorRealms || errorRegions) throw errorClasses;
	if (loadingClasses || loadingRealms || loadingRegions) return <Spinner />;

	function handCheckboxImageGroupChange(name: string, slug: string): void {
		const arr = filters[name] as string[];
		const alreadyInArray = arr.find((i) => i === slug);
		setFilters((f) => {
			if (alreadyInArray) {
				return {
					...f,
					[name]: arr.filter((a) => a !== slug),
				};
			} else {
				return { ...f, [name]: [...arr, slug] };
			}
		});
	}

	function handleAnyClick(name: string) {
		setFilters((f) => {
			return { ...f, [name]: [] };
		});
	}

	function handleRealmChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setFilters((f) => {
			return {
				...f,
				realm: event.target.value,
			};
		});
	}

	function handleRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
		setFilters((f) => {
			return { ...f, rating: parseInt(event.target.value) };
		});
	}
	function handleFilterSubmit() {
		const queryParams = new URLSearchParams(location.search);

		filters.realm
			? queryParams.set('realms', filters.realm)
			: queryParams.delete('realms');
		filters.classes.length > 0
			? queryParams.set('classes', filters.classes.join('_'))
			: queryParams.delete('classes');
		filters.rating
			? queryParams.set('rating', filters.rating.toString())
			: queryParams.delete('rating');
		filters.regions.length > 0
			? queryParams.set('regions', filters.regions.join('_'))
			: queryParams.delete('regions');
		navigate({
			pathname: location.pathname,
			search: `?${queryParams.toString()}`,
		});
	}

	function handleResetClick() {}

	return (
		<section style={{ height: 150 }} className="leaderboard-search">
			<div className="columns">
				<div className="column is-2">
					<CheckboxImageGroup
						options={regions}
						name="regions"
						selected={filters.regions}
						label="Regions"
						onChange={handCheckboxImageGroupChange}
						onAnyClick={handleAnyClick}
					/>
				</div>
				<div className="column">
					<Select
						options={realms}
						label="Realms"
						selected={filters.realm}
						onChange={handleRealmChange}
					/>
				</div>
				<div className="column">
					<CheckboxImageGroup
						options={classes}
						name="classes"
						selected={filters.classes}
						label="Classes"
						onChange={handCheckboxImageGroupChange}
						onAnyClick={handleAnyClick}
					/>
				</div>
				<div className="column">
					<InputRange
						min={0}
						max={4000}
						value={filters.rating}
						label="Rating"
						onChange={handleRangeChange}
					/>
				</div>
			</div>
			<p className="buttons is-pulled-right">
				<button className="button  is-small" onClick={handleFilterSubmit}>
					<span className="icon">
						<i className="fas fa-filter"></i>
					</span>
					<span>Filter</span>
				</button>
				<button className="button is-small" onClick={handleResetClick}>
					<span className="icon">
						<i className="fas fa-times"></i>
					</span>
					<span>Reset</span>
				</button>
			</p>
		</section>
	);
}

export interface ILeaderboardFilter {
	[key: string]: string[] | number | string | null;
	regions: string[];
	classes: string[];
	realm: string;
	rating: number;
}
