import React, { useState } from 'react';
import useFetch from '../../../services/useFetch';
import { IOption } from '../../shared/CheckboxImage/CheckboxImage';
import CheckboxImageGroup from '../../shared/CheckboxImageGroup/CheckboxImageGroup';
import InputRange from '../../shared/InputRange/InputRange';
import Select, { ISelectOptions } from '../../shared/Select/Select';
import Spinner from '../../shared/Spinner';

import './leaderboard-filter.scss';

export default function LeaderboardSearch({
	defaultFilter,
	onResetClick,
	onFilterSubmit,
}: IProps) {
	const [filter, setFilter] = useState(defaultFilter);
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

	function handCheckboxImageGroupChange(name: string, value: number): void {
		const arr = filter[name] as number[];
		const alreadyInArray = arr.find((i) => i === value);
		setFilter((f) => {
			if (alreadyInArray) {
				return {
					...f,
					[name]: arr.filter((a) => a === value),
				};
			} else {
				return { ...f, [name]: [...arr, value] };
			}
		});
	}

	function handleAnyClick(name: string) {
		setFilter((f) => {
			return { ...f, [name]: [] };
		});
	}

	function handleRealmChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setFilter((f) => {
			return {
				...filter,
				realm: parseInt(event.target.value),
			};
		});
	}

	function handleRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
		setFilter((f) => {
			return { ...filter, rating: parseInt(event.target.value) };
		});
	}
	function handleFilterSubmit() {
		onFilterSubmit(filter);
	}

	return (
		<section style={{ height: 150 }} className="leaderboard-search">
			<div className="columns">
				<div className="column is-2">
					<CheckboxImageGroup
						options={regions}
						name="regions"
						selected={filter.regions}
						label="Regions"
						onChange={handCheckboxImageGroupChange}
						onAnyClick={handleAnyClick}
					/>
				</div>
				<div className="column">
					<Select
						options={realms}
						label="Realms"
						selected={filter.realm}
						onChange={handleRealmChange}
					/>
				</div>
				<div className="column">
					<CheckboxImageGroup
						options={classes}
						name="classes"
						selected={filter.classes}
						label="Classes"
						onChange={handCheckboxImageGroupChange}
						onAnyClick={handleAnyClick}
					/>
				</div>
				<div className="column">
					<InputRange
						min={0}
						max={4000}
						value={filter.rating}
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
				<button className="button is-small" onClick={onResetClick}>
					<span className="icon">
						<i className="fas fa-times"></i>
					</span>
					<span>Reset</span>
				</button>
			</p>
		</section>
	);
}

export interface ILeaderboardFilterOptions {
	[key: string]: number[] | number | string | null;
	regions: number[];
	classes: number[];
	realm: number;
	rating: number;
}

interface IProps {
	defaultFilter: ILeaderboardFilterOptions;
	onFilterSubmit(filter: ILeaderboardFilterOptions): void;
	onResetClick(): void;
}
