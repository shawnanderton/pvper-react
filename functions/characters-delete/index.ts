import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { characterService } from '../services';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	const { resources: characters } = await characterService.getAll();
	await characterService.deleteCharacters(characters);
};

export default httpTrigger;
