import React from 'react';

export default function Select({ options, label, selected, onChange }: IProp) {
	return (
		<div>
			<div className="field">
				<label className="label">{label}</label>
				<div className="control">
					<div className="select is-small">
						<select onChange={onChange} value={selected}>
							<option key="any">Any</option>
							{options?.map((o) => {
								return (
									<option key={o.value} value={o.value}>
										{o.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export interface ISelectOptions {
	name: string;
	value: number;
}

interface IProp {
	label: string;
	selected: number;
	options: ISelectOptions[] | null;
	onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}
