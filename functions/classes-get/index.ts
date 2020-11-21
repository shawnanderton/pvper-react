import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([
		{
			slug: 'death-knight',
			name: 'death Knight',
			img: '/images/deathknight.jpg',
			size: '24x24',
		},
		{
			slug: 'demon-hunter',
			name: 'Demon Hunter',
			img: '/images/demonhunter.jpg',
			size: '24x24',
		},
		{
			slug: 'druid',
			name: 'Druid',
			img: '/images/druid.jpg',
			size: '24x24',
		},
		{
			slug: 'hunter',
			name: 'Hunter',
			img: '/images/hunter.jpg',
			size: '24x24',
		},
		{
			slug: 'mage',
			name: 'Mage',
			img: '/images/mage.jpg',
			size: '24x24',
		},
		{
			slug: 'monk',
			name: 'monk',
			img: '/images/monk.jpg',
			size: '24x24',
		},
		{
			slug: 'paladin',
			name: 'Paladin',
			img: '/images/paladin.jpg',
			size: '24x24',
		},
		{
			slug: 'priest',
			name: 'Priest',
			img: '/images/priest.jpg',
			size: '24x24',
		},
		{
			slug: 'rogue',
			name: 'Rogue',
			img: '/images/rogue.jpg',
			size: '24x24',
		},
		{
			slug: 'shaman',
			name: 'Shaman',
			img: '/images/shaman.jpg',
			size: '24x24',
		},
		{
			slug: 'warlock',
			name: 'Warlock',
			img: '/images/warlock.jpg',
			size: '24x24',
		},
		{
			slug: 'warrior',
			name: 'Warrior',
			img: '/images/warrior.jpg',
			size: '24x24',
		},
	]);
};

export default httpTrigger;
