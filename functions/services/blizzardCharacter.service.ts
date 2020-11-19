import { OperationInput } from '@azure/cosmos';
import {
	addCharacterProfileToCharacter,
	convertLeaderBoardEntryToCharacter,
} from '../helpers/blizzardCharacterProfileToCharacter';
import { toOperationInput } from '../helpers/bulkOperation';
import { IPvpLeaderboardEntry } from '../interfaces/IBlizzard';
import { ICharacter } from '../interfaces/ICharacter';
import { REGIONS, PVPBRACKETS, BULKTYPES } from './../enums/blizzard';
import blizzardAuthToken from './blizzardConfig';
import {
	getCharacterProfile,
	getLeaderboard,
} from './blizzardLeaderboard.service';
import characterService from './character.service';

async function getAndUpdateLeaderboard(
	region: REGIONS,
	season: number,
	pvpBracket: PVPBRACKETS,
	offset: number,
	limit: number,
): Promise<OperationInput[]> {
	await blizzardAuthToken.set();
	const token = await blizzardAuthToken.get();
	let { entries } = await getLeaderboard(region, season, pvpBracket, token);
	entries = entries.slice(offset * limit, offset * limit);
	const { resources: characters } = await characterService.getAll();

	const operations: OperationInput[] = [];

	const parallelTabs = 100;
	const promiseBuffer = [];
	let entryOffset = 0;
	const entryLoopCount = Math.ceil(entries.length / parallelTabs);

	for (let i = 0; i < entryLoopCount; i++) {
		for (let j = 0; j < parallelTabs && entryOffset < entries.length; j++) {
			let character = characters.find(
				(c) => c.blizzardId === entries[entryOffset].character.id,
			);
			var {
				character: convertedCharacter,
				type,
			} = convertLeaderBoardEntryToCharacter(
				entries[entryOffset],
				pvpBracket,
				character,
			);
			if (convertedCharacter) {
				promiseBuffer.push(updateCharacter(convertedCharacter, token, type));
			}
			entryOffset++;
		}
		try {
			var results = await Promise.all(promiseBuffer);
			promiseBuffer.splice(0, promiseBuffer.length);
			operations.push(
				...results.filter((r) => r.operation).map((r) => r.operation),
			);
		} catch (err) {
			console.error(err.message);
		}
	}

	return operations;
}

async function updateCharacter(
	character: ICharacter,
	token: string,
	type: BULKTYPES,
): Promise<{ operation: OperationInput }> {
	try {
		let characterProfile = await getCharacterProfile(
			REGIONS.NorthAmerica,
			character.realm,
			character.name.toLowerCase(),
			token,
		);

		if (!characterProfile) {
			return { operation: null };
		}

		character = addCharacterProfileToCharacter(character, characterProfile);

		let operation = toOperationInput(character, character.region, type);

		return { operation };
	} catch (err) {
		console.log(err.message);
	}
}
export default { getAndUpdateLeaderboard };
