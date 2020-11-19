import { IPvpBracket } from './IPvpBracket';
import { JSONObject } from '@azure/cosmos';
import { REGIONS } from './../enums/blizzard';
import { IEntity } from './IEntity';

export interface ICharacter {
	id?: string;
	blizzardId: number;
	name: string;
	current_2v2?: IPvpBracket;
	current_3v3?: IPvpBracket;
	current_rbg?: IPvpBracket;
	brackets?: IPvpBracket[];
	faction?: string;
	realm?: string;
	gender?: string;
	level?: number;
	itemLevel?: number;
	title?: string;
	class?: string;
	spec?: string;
	race?: string;
	guild?: string;
	region?: REGIONS;
}
