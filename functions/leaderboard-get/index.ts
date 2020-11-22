import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	const bracket = context.req.params.bracket;
	let { page, limit, classes, regions, realm, rating } = context.req.query;

	classes = classes
		? classes.toLowerCase().replace(/-/g, ' ').replace(/_/g, "','")
		: '';
	regions = regions
		? regions.toLowerCase().replace(/-/g, ' ').replace(/_/g, "','")
		: '';
	realm = realm ? realm.toLowerCase() : '';
	const ratingNumber: number = isNaN(parseInt(rating)) ? 0 : parseInt(rating);

	try {
		const entriesPromise = characterService.getLeaderboards(
			bracket,
			parseInt(page),
			parseInt(limit),
			classes,
			regions,
			realm,
			ratingNumber,
		);

		context.res.headers['X-Total-Count'] = await characterService.getTotalCount(
			bracket,
			classes,
			regions,
			realm,
			ratingNumber,
		);
		context.res.status(200).json(await entriesPromise);
	} catch (error) {
		context.res.status(500).send(error);
	}
};

export default httpTrigger;
