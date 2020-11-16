import { PVPBRACKETS } from '../enums/blizzard';
export interface IPvpBracket {
	name: PVPBRACKETS;
	rank: number;
	rating: number;
	played: number;
	won: number;
	lost: number;
}
