import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([
		{
			value: 0,
			name: 'US',
			img: '/images/region_us.png',
			size: '24x20',
		},
		{
			value: 1,
			name: 'EU',
			img: '/images/region_eu.png',
			size: '24x20',
		},
	]);
};

export default httpTrigger;
