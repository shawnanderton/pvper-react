import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([
		{
			slug: 'us',
			name: 'US',
			img: '/images/region_us.png',
			size: '24x20',
		},
		{
			slug: 'eu',
			name: 'EU',
			img: '/images/region_eu.png',
			size: '24x20',
		},
	]);
};

export default httpTrigger;
