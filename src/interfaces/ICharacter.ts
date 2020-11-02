import { REGIONS } from '../enums/blizzard';
import { IPvpBracket } from './IPvpBracket';

export default interface ICharacter {
	blizzardId: number;
	name: string;
	bracket: IPvpBracket;
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
