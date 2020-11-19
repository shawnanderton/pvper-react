import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PVPBRACKETS, REGIONS } from '../enums/blizzard';
import { blizzardCharacterService, characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	try {
		const operations = await blizzardCharacterService.getAndUpdateLeaderboard(
			REGIONS.NorthAmerica,
			29,
			PVPBRACKETS.RGB,
		);
		await characterService.bulkSave(operations);
	} catch (err) {
		console.log(err.message);
	}
};

export default httpTrigger;
