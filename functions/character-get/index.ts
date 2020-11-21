import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([]);
	try {
		const characters = await characterService.getAll();
		context.res.status(200).json(characters);
	} catch (error) {
		context.res.status(500).send(error);
	}
};

export default httpTrigger;
