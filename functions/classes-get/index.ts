import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([
		{
			value: 0,
			name: 'death Knight',
			img: '/images/deathknight.jpg',
			size: '24x24',
		},
		{
			value: 1,
			name: 'Demon Hunter',
			img: '/images/demonhunter.jpg',
			size: '24x24',
		},
		{
			value: 2,
			name: 'Druid',
			img: '/images/druid.jpg',
			size: '24x24',
		},
		{
			value: 3,
			name: 'Hunter',
			img: '/images/hunter.jpg',
			size: '24x24',
		},
		{
			value: 4,
			name: 'Mage',
			img: '/images/mage.jpg',
			size: '24x24',
		},
		{
			value: 5,
			name: 'monk',
			img: '/images/monk.jpg',
			size: '24x24',
		},
		{
			value: 6,
			name: 'Paladin',
			img: '/images/paladin.jpg',
			size: '24x24',
		},
		{
			value: 7,
			name: 'Priest',
			img: '/images/priest.jpg',
			size: '24x24',
		},
		{
			value: 8,
			name: 'Rogue',
			img: '/images/rogue.jpg',
			size: '24x24',
		},
		{
			value: 9,
			name: 'Shaman',
			img: '/images/shaman.jpg',
			size: '24x24',
		},
		{
			value: 10,
			name: 'Warlock',
			img: '/images/warlock.jpg',
			size: '24x24',
		},
		{
			value: 11,
			name: 'warrior',
			img: '/images/warrior.jpg',
			size: '24x24',
		},
	]);
};

export default httpTrigger;
