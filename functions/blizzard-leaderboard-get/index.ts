import { ICharacter } from './../interfaces/ICharacter';
import { IPvpLeaderboardEntry } from './../interfaces/IBlizzard';
import { AzureFunction, Context } from '@azure/functions';
import { PVPBRACKETS, REGIONS } from '../enums/blizzard';
import blizzardAuthToken from '../services/blizzardConfig';
import {
	getLeaderboard,
	getCharacterProfile,
} from '../services/blizzardLeaderboard.service';
import { saveCharacters } from '../services/character.service';
import blizzardCharacterToCharacter from '../helpers/blizzardCharacterProfileToCharacter';
import { IBlizzardCharacterProfile } from '../interfaces/IBlizzardCharacterProfile';

const timerTrigger: AzureFunction = async function (
	context: Context,
	myTimer: any,
): Promise<void> {
	var timeStamp = new Date().toISOString();

	if (myTimer.isPastDue) {
		context.log('Timer function is running late!');
	}
	await blizzardAuthToken.set();
	const token = await blizzardAuthToken.get();
	const leaderboard = await getLeaderboard(
		REGIONS.NorthAmerica,
		29,
		PVPBRACKETS.ARENA_3v3,
		token,
	);

	const data: ICharacter[] = await Promise.all(
		leaderboard.entries.map(async (e: IPvpLeaderboardEntry) => {
			const characterProfile = await getCharacterProfile(
				REGIONS.NorthAmerica,
				e.character.realm.slug,
				e.character.name,
				token,
			);
			return blizzardCharacterToCharacter(
				e,
				characterProfile,
				PVPBRACKETS.RGB,
			);
		}),
	);

	const data2 = [];
	while (data.length) {
		await saveCharacters(data.splice(0, 100));
		console.log(data.length);
	}
};

export default timerTrigger;
