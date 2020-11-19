import { REGIONS } from '../enums/blizzard';
import { IPvpBracket } from './IPvpBracket';

export default interface ICharacter {
	[key: string]: any;
	blizzardId: number;
	name: string;
	brackets?: IPvpBracket[];
	faction: string;
	realm: string;
	gender: string;
	level: number;
	itemLevel?: number;
	title?: string;
	class: string;
	spec: string;
	race: string;
	guild?: string;
	region: REGIONS;
}
