import React from 'react';

export default function IconSelect({ names, type }: IProps) {
	function onClicked(test: number) {
		debugger;

		console.log(test);
	}
	return (
		<div className="columns is-1 is-justify-content-center">
			{names.map((name) => {
				return (
					<a
						key={name}
						href="!#"
						onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
							e.preventDefault();
							onClicked(1);
						}}
						className="column is-narrow"
					>
						<img
							style={{ verticalAlign: 'middle' }}
							src={`${name}.${type}`}
							alt="region us"
						/>
					</a>
				);
			})}
			<a
				href="!#"
				onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
					e.preventDefault();

					onClicked(1);
				}}
				className="column is-narrow"
			>
				all
			</a>
		</div>
	);
}

interface IProps {
	names: string[];
	type: string;
}
