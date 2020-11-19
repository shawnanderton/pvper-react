import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PVPBRACKETS, REGIONS } from '../enums/blizzard';
import { blizzardCharacterService, characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	const bracket = context.req.params.bracket;
	const { _offset, _limit } = context.req.query;
	try {
		const operations = await blizzardCharacterService.getAndUpdateLeaderboard(
			REGIONS.NorthAmerica,
			29,
			bracket as PVPBRACKETS,
			parseInt(_offset),
			parseInt(_limit),
		);
		if (operations.length > 0) await characterService.bulkSave(operations);
	} catch (err) {
		console.log(err.message);
	}
};

export default httpTrigger;
