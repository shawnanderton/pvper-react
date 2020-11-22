import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	const bracket = context.req.params.bracket;
	const { page, limit } = context.req.query;

	try {
		const entriesPromise = characterService.getLeaderboards(
			bracket,
			parseInt(page),
			parseInt(limit),
		);

		context.res.headers['X-Total-Count'] = await characterService.getTotalCount(
			bracket,
		);
		context.res.status(200).json(await entriesPromise);
	} catch (error) {
		context.res.status(500).send(error);
	}
};

export default httpTrigger;
