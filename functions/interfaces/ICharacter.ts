import { REGIONS } from './../enums/blizzard';
import { IEntity } from './IEntity';
import { IPvpBracket } from './IPVPBracket';

export interface ICharacter {
	blizzardId: number;
	name: string;
	bracket: IPvpBracket;
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
