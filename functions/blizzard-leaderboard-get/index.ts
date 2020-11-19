import { ICharacter } from './../interfaces/ICharacter';
import { OperationInput } from '@azure/cosmos';
import { IPvpLeaderboardEntry } from './../interfaces/IBlizzard';
import { AzureFunction, Context } from '@azure/functions';
import { PVPBRACKETS, REGIONS } from '../enums/blizzard';
import blizzardAuthToken from '../services/blizzardConfig';
import {
	getLeaderboard,
	getCharacterProfile,
} from '../services/blizzardLeaderboard.service';
import { characterService } from '../services';
import {
	addCharacterProfileToCharacter,
	convertLeaderBoardEntryToCharacter,
} from '../helpers/blizzardCharacterProfileToCharacter';
import { toOperationInput } from '../helpers/bulkOperation';

const timerTrigger: AzureFunction = async function (
	context: Context,
	myTimer: any,
): Promise<void> {
	var timeStamp = new Date().toISOString();
	if (myTimer.isPastDue) {
		return context.log('Timer function is running late!');
	}
};

export default timerTrigger;
