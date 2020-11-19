import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
	context: Context,
	req: HttpRequest,
): Promise<void> {
	context.res.status(200).json([
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1?namespace=dynamic-us',
			},
			name: 'Lightbringer',
			value: 1,
			slug: 'lightbringer',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/2?namespace=dynamic-us',
			},
			name: 'Cenarius',
			value: 2,
			slug: 'cenarius',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3?namespace=dynamic-us',
			},
			name: 'Uther',
			value: 3,
			slug: 'uther',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/4?namespace=dynamic-us',
			},
			name: 'Kilrogg',
			value: 4,
			slug: 'kilrogg',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/5?namespace=dynamic-us',
			},
			name: 'Proudmoore',
			value: 5,
			slug: 'proudmoore',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/6?namespace=dynamic-us',
			},
			name: 'Hyjal',
			value: 6,
			slug: 'hyjal',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/7?namespace=dynamic-us',
			},
			name: 'Frostwolf',
			value: 7,
			slug: 'frostwolf',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/8?namespace=dynamic-us',
			},
			name: "Ner'zhul",
			value: 8,
			slug: 'nerzhul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/9?namespace=dynamic-us',
			},
			name: "Kil'jaeden",
			value: 9,
			slug: 'kiljaeden',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/10?namespace=dynamic-us',
			},
			name: 'Blackrock',
			value: 10,
			slug: 'blackrock',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/11?namespace=dynamic-us',
			},
			name: 'Tichondrius',
			value: 11,
			slug: 'tichondrius',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/12?namespace=dynamic-us',
			},
			name: 'Silver Hand',
			value: 12,
			slug: 'silver-hand',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/13?namespace=dynamic-us',
			},
			name: 'Doomhammer',
			value: 13,
			slug: 'doomhammer',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/14?namespace=dynamic-us',
			},
			name: 'Icecrown',
			value: 14,
			slug: 'icecrown',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/15?namespace=dynamic-us',
			},
			name: 'Deathwing',
			value: 15,
			slug: 'deathwing',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/16?namespace=dynamic-us',
			},
			name: "Kel'Thuzad",
			value: 16,
			slug: 'kelthuzad',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/47?namespace=dynamic-us',
			},
			name: 'Eitrigg',
			value: 47,
			slug: 'eitrigg',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/51?namespace=dynamic-us',
			},
			name: 'Garona',
			value: 51,
			slug: 'garona',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/52?namespace=dynamic-us',
			},
			name: 'Alleria',
			value: 52,
			slug: 'alleria',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/53?namespace=dynamic-us',
			},
			name: 'Hellscream',
			value: 53,
			slug: 'hellscream',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/54?namespace=dynamic-us',
			},
			name: 'Blackhand',
			value: 54,
			slug: 'blackhand',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/55?namespace=dynamic-us',
			},
			name: 'Whisperwind',
			value: 55,
			slug: 'whisperwind',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/56?namespace=dynamic-us',
			},
			name: 'Archimonde',
			value: 56,
			slug: 'archimonde',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/57?namespace=dynamic-us',
			},
			name: 'Illidan',
			value: 57,
			slug: 'illidan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/58?namespace=dynamic-us',
			},
			name: 'Stormreaver',
			value: 58,
			slug: 'stormreaver',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/59?namespace=dynamic-us',
			},
			name: "Mal'Ganis",
			value: 59,
			slug: 'malganis',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/60?namespace=dynamic-us',
			},
			name: 'Stormrage',
			value: 60,
			slug: 'stormrage',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/61?namespace=dynamic-us',
			},
			name: "Zul'jin",
			value: 61,
			slug: 'zuljin',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/62?namespace=dynamic-us',
			},
			name: 'Medivh',
			value: 62,
			slug: 'medivh',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/63?namespace=dynamic-us',
			},
			name: 'Durotan',
			value: 63,
			slug: 'durotan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/64?namespace=dynamic-us',
			},
			name: 'Bloodhoof',
			value: 64,
			slug: 'bloodhoof',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/65?namespace=dynamic-us',
			},
			name: 'Khadgar',
			value: 65,
			slug: 'khadgar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/66?namespace=dynamic-us',
			},
			name: 'Dalaran',
			value: 66,
			slug: 'dalaran',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/67?namespace=dynamic-us',
			},
			name: 'Elune',
			value: 67,
			slug: 'elune',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/68?namespace=dynamic-us',
			},
			name: 'Lothar',
			value: 68,
			slug: 'lothar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/69?namespace=dynamic-us',
			},
			name: 'Arthas',
			value: 69,
			slug: 'arthas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/70?namespace=dynamic-us',
			},
			name: 'Mannoroth',
			value: 70,
			slug: 'mannoroth',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/71?namespace=dynamic-us',
			},
			name: 'Warsong',
			value: 71,
			slug: 'warsong',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/72?namespace=dynamic-us',
			},
			name: 'Shattered Hand',
			value: 72,
			slug: 'shattered-hand',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/73?namespace=dynamic-us',
			},
			name: 'Bleeding Hollow',
			value: 73,
			slug: 'bleeding-hollow',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/74?namespace=dynamic-us',
			},
			name: 'Skullcrusher',
			value: 74,
			slug: 'skullcrusher',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/75?namespace=dynamic-us',
			},
			name: 'Argent Dawn',
			value: 75,
			slug: 'argent-dawn',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us',
			},
			name: 'Sargeras',
			value: 76,
			slug: 'sargeras',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/77?namespace=dynamic-us',
			},
			name: 'Azgalor',
			value: 77,
			slug: 'azgalor',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/78?namespace=dynamic-us',
			},
			name: 'Magtheridon',
			value: 78,
			slug: 'magtheridon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/79?namespace=dynamic-us',
			},
			name: 'Destromath',
			value: 79,
			slug: 'destromath',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/80?namespace=dynamic-us',
			},
			name: 'Gorgonnash',
			value: 80,
			slug: 'gorgonnash',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/81?namespace=dynamic-us',
			},
			name: 'Dethecus',
			value: 81,
			slug: 'dethecus',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/82?namespace=dynamic-us',
			},
			name: 'Spinebreaker',
			value: 82,
			slug: 'spinebreaker',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/83?namespace=dynamic-us',
			},
			name: 'Bonechewer',
			value: 83,
			slug: 'bonechewer',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/84?namespace=dynamic-us',
			},
			name: 'Dragonmaw',
			value: 84,
			slug: 'dragonmaw',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/85?namespace=dynamic-us',
			},
			name: 'Shadowsong',
			value: 85,
			slug: 'shadowsong',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/86?namespace=dynamic-us',
			},
			name: 'Silvermoon',
			value: 86,
			slug: 'silvermoon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/87?namespace=dynamic-us',
			},
			name: 'Windrunner',
			value: 87,
			slug: 'windrunner',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/88?namespace=dynamic-us',
			},
			name: 'Cenarion Circle',
			value: 88,
			slug: 'cenarion-circle',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/89?namespace=dynamic-us',
			},
			name: 'Nathrezim',
			value: 89,
			slug: 'nathrezim',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/90?namespace=dynamic-us',
			},
			name: 'Terenas',
			value: 90,
			slug: 'terenas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/91?namespace=dynamic-us',
			},
			name: 'Burning Blade',
			value: 91,
			slug: 'burning-blade',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/92?namespace=dynamic-us',
			},
			name: 'Gorefiend',
			value: 92,
			slug: 'gorefiend',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/93?namespace=dynamic-us',
			},
			name: 'Eredar',
			value: 93,
			slug: 'eredar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/94?namespace=dynamic-us',
			},
			name: 'Shadowmoon',
			value: 94,
			slug: 'shadowmoon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/95?namespace=dynamic-us',
			},
			name: "Lightning's Blade",
			value: 95,
			slug: 'lightnings-blade',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/96?namespace=dynamic-us',
			},
			name: 'Eonar',
			value: 96,
			slug: 'eonar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/97?namespace=dynamic-us',
			},
			name: 'Gilneas',
			value: 97,
			slug: 'gilneas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/98?namespace=dynamic-us',
			},
			name: 'Kargath',
			value: 98,
			slug: 'kargath',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/99?namespace=dynamic-us',
			},
			name: 'Llane',
			value: 99,
			slug: 'llane',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/100?namespace=dynamic-us',
			},
			name: 'Earthen Ring',
			value: 100,
			slug: 'earthen-ring',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/101?namespace=dynamic-us',
			},
			name: 'Laughing Skull',
			value: 101,
			slug: 'laughing-skull',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/102?namespace=dynamic-us',
			},
			name: 'Burning Legion',
			value: 102,
			slug: 'burning-legion',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/103?namespace=dynamic-us',
			},
			name: 'Thunderlord',
			value: 103,
			slug: 'thunderlord',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/104?namespace=dynamic-us',
			},
			name: 'Malygos',
			value: 104,
			slug: 'malygos',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/105?namespace=dynamic-us',
			},
			name: 'Thunderhorn',
			value: 105,
			slug: 'thunderhorn',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/106?namespace=dynamic-us',
			},
			name: 'Aggramar',
			value: 106,
			slug: 'aggramar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/107?namespace=dynamic-us',
			},
			name: 'Crushridge',
			value: 107,
			slug: 'crushridge',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/108?namespace=dynamic-us',
			},
			name: 'Stonemaul',
			value: 108,
			slug: 'stonemaul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/109?namespace=dynamic-us',
			},
			name: 'Daggerspine',
			value: 109,
			slug: 'daggerspine',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/110?namespace=dynamic-us',
			},
			name: 'Stormscale',
			value: 110,
			slug: 'stormscale',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/111?namespace=dynamic-us',
			},
			name: 'Dunemaul',
			value: 111,
			slug: 'dunemaul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/112?namespace=dynamic-us',
			},
			name: 'Boulderfist',
			value: 112,
			slug: 'boulderfist',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/113?namespace=dynamic-us',
			},
			name: 'Suramar',
			value: 113,
			slug: 'suramar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/114?namespace=dynamic-us',
			},
			name: 'Dragonblight',
			value: 114,
			slug: 'dragonblight',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/115?namespace=dynamic-us',
			},
			name: 'Draenor',
			value: 115,
			slug: 'draenor',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/116?namespace=dynamic-us',
			},
			name: 'Uldum',
			value: 116,
			slug: 'uldum',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/117?namespace=dynamic-us',
			},
			name: 'Bronzebeard',
			value: 117,
			slug: 'bronzebeard',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/118?namespace=dynamic-us',
			},
			name: 'Feathermoon',
			value: 118,
			slug: 'feathermoon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/119?namespace=dynamic-us',
			},
			name: 'Bloodscalp',
			value: 119,
			slug: 'bloodscalp',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/120?namespace=dynamic-us',
			},
			name: 'Darkspear',
			value: 120,
			slug: 'darkspear',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/121?namespace=dynamic-us',
			},
			name: 'Azjol-Nerub',
			value: 121,
			slug: 'azjolnerub',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/122?namespace=dynamic-us',
			},
			name: 'Perenolde',
			value: 122,
			slug: 'perenolde',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/123?namespace=dynamic-us',
			},
			name: "Eldre'Thalas",
			value: 123,
			slug: 'eldrethalas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/124?namespace=dynamic-us',
			},
			name: 'Spirestone',
			value: 124,
			slug: 'spirestone',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/125?namespace=dynamic-us',
			},
			name: 'Shadow Council',
			value: 125,
			slug: 'shadow-council',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/126?namespace=dynamic-us',
			},
			name: 'Scarlet Crusade',
			value: 126,
			slug: 'scarlet-crusade',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/127?namespace=dynamic-us',
			},
			name: 'Firetree',
			value: 127,
			slug: 'firetree',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/128?namespace=dynamic-us',
			},
			name: 'Frostmane',
			value: 128,
			slug: 'frostmane',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/129?namespace=dynamic-us',
			},
			name: 'Gurubashi',
			value: 129,
			slug: 'gurubashi',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/130?namespace=dynamic-us',
			},
			name: 'Smolderthorn',
			value: 130,
			slug: 'smolderthorn',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/131?namespace=dynamic-us',
			},
			name: 'Skywall',
			value: 131,
			slug: 'skywall',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/151?namespace=dynamic-us',
			},
			name: 'Runetotem',
			value: 151,
			slug: 'runetotem',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/153?namespace=dynamic-us',
			},
			name: 'Moonrunner',
			value: 153,
			slug: 'moonrunner',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/154?namespace=dynamic-us',
			},
			name: 'Detheroc',
			value: 154,
			slug: 'detheroc',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/155?namespace=dynamic-us',
			},
			name: 'Kalecgos',
			value: 155,
			slug: 'kalecgos',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/156?namespace=dynamic-us',
			},
			name: 'Ursin',
			value: 156,
			slug: 'ursin',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/157?namespace=dynamic-us',
			},
			name: 'Dark Iron',
			value: 157,
			slug: 'dark-iron',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/158?namespace=dynamic-us',
			},
			name: 'Greymane',
			value: 158,
			slug: 'greymane',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/159?namespace=dynamic-us',
			},
			name: 'Wildhammer',
			value: 159,
			slug: 'wildhammer',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/160?namespace=dynamic-us',
			},
			name: 'Staghelm',
			value: 160,
			slug: 'staghelm',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/162?namespace=dynamic-us',
			},
			name: 'Emerald Dream',
			value: 162,
			slug: 'emerald-dream',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/163?namespace=dynamic-us',
			},
			name: 'Maelstrom',
			value: 163,
			slug: 'maelstrom',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/164?namespace=dynamic-us',
			},
			name: 'Twisting Nether',
			value: 164,
			slug: 'twisting-nether',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1067?namespace=dynamic-us',
			},
			name: "Cho'gall",
			value: 1067,
			slug: 'chogall',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1068?namespace=dynamic-us',
			},
			name: "Gul'dan",
			value: 1068,
			slug: 'guldan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1069?namespace=dynamic-us',
			},
			name: "Kael'thas",
			value: 1069,
			slug: 'kaelthas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1070?namespace=dynamic-us',
			},
			name: 'Alexstrasza',
			value: 1070,
			slug: 'alexstrasza',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1071?namespace=dynamic-us',
			},
			name: 'Kirin Tor',
			value: 1071,
			slug: 'kirin-tor',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1072?namespace=dynamic-us',
			},
			name: 'Ravencrest',
			value: 1072,
			slug: 'ravencrest',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1075?namespace=dynamic-us',
			},
			name: 'Balnazzar',
			value: 1075,
			slug: 'balnazzar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1128?namespace=dynamic-us',
			},
			name: 'Azshara',
			value: 1128,
			slug: 'azshara',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1129?namespace=dynamic-us',
			},
			name: 'Agamaggan',
			value: 1129,
			slug: 'agamaggan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1130?namespace=dynamic-us',
			},
			name: 'Lightninghoof',
			value: 1130,
			slug: 'lightninghoof',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1131?namespace=dynamic-us',
			},
			name: 'Nazjatar',
			value: 1131,
			slug: 'nazjatar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1132?namespace=dynamic-us',
			},
			name: 'Malfurion',
			value: 1132,
			slug: 'malfurion',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1136?namespace=dynamic-us',
			},
			name: 'Aegwynn',
			value: 1136,
			slug: 'aegwynn',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1137?namespace=dynamic-us',
			},
			name: 'Akama',
			value: 1137,
			slug: 'akama',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1138?namespace=dynamic-us',
			},
			name: 'Chromaggus',
			value: 1138,
			slug: 'chromaggus',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1139?namespace=dynamic-us',
			},
			name: 'Draka',
			value: 1139,
			slug: 'draka',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1140?namespace=dynamic-us',
			},
			name: "Drak'thul",
			value: 1140,
			slug: 'drakthul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1141?namespace=dynamic-us',
			},
			name: 'Garithos',
			value: 1141,
			slug: 'garithos',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1142?namespace=dynamic-us',
			},
			name: 'Hakkar',
			value: 1142,
			slug: 'hakkar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1143?namespace=dynamic-us',
			},
			name: 'Khaz Modan',
			value: 1143,
			slug: 'khaz-modan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1145?namespace=dynamic-us',
			},
			name: "Mug'thol",
			value: 1145,
			slug: 'mugthol',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1146?namespace=dynamic-us',
			},
			name: 'Korgath',
			value: 1146,
			slug: 'korgath',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1147?namespace=dynamic-us',
			},
			name: 'Kul Tiras',
			value: 1147,
			slug: 'kul-tiras',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1148?namespace=dynamic-us',
			},
			name: 'Malorne',
			value: 1148,
			slug: 'malorne',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1151?namespace=dynamic-us',
			},
			name: 'Rexxar',
			value: 1151,
			slug: 'rexxar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1154?namespace=dynamic-us',
			},
			name: 'Thorium Brotherhood',
			value: 1154,
			slug: 'thorium-brotherhood',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1165?namespace=dynamic-us',
			},
			name: 'Arathor',
			value: 1165,
			slug: 'arathor',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1173?namespace=dynamic-us',
			},
			name: 'Madoran',
			value: 1173,
			slug: 'madoran',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1175?namespace=dynamic-us',
			},
			name: 'Trollbane',
			value: 1175,
			slug: 'trollbane',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1182?namespace=dynamic-us',
			},
			name: 'Muradin',
			value: 1182,
			slug: 'muradin',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1184?namespace=dynamic-us',
			},
			name: "Vek'nilash",
			value: 1184,
			slug: 'veknilash',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1185?namespace=dynamic-us',
			},
			name: "Sen'jin",
			value: 1185,
			slug: 'senjin',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1190?namespace=dynamic-us',
			},
			name: 'Baelgun',
			value: 1190,
			slug: 'baelgun',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1258?namespace=dynamic-us',
			},
			name: 'Duskwood',
			value: 1258,
			slug: 'duskwood',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1259?namespace=dynamic-us',
			},
			name: 'Zuluhed',
			value: 1259,
			slug: 'zuluhed',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1260?namespace=dynamic-us',
			},
			name: 'Steamwheedle Cartel',
			value: 1260,
			slug: 'steamwheedle-cartel',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1262?namespace=dynamic-us',
			},
			name: 'Norgannon',
			value: 1262,
			slug: 'norgannon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1263?namespace=dynamic-us',
			},
			name: 'Thrall',
			value: 1263,
			slug: 'thrall',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1264?namespace=dynamic-us',
			},
			name: 'Anetheron',
			value: 1264,
			slug: 'anetheron',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1265?namespace=dynamic-us',
			},
			name: 'Turalyon',
			value: 1265,
			slug: 'turalyon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1266?namespace=dynamic-us',
			},
			name: 'Haomarush',
			value: 1266,
			slug: 'haomarush',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1267?namespace=dynamic-us',
			},
			name: 'Scilla',
			value: 1267,
			slug: 'scilla',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1268?namespace=dynamic-us',
			},
			name: 'Ysondre',
			value: 1268,
			slug: 'ysondre',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1270?namespace=dynamic-us',
			},
			name: 'Ysera',
			value: 1270,
			slug: 'ysera',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1271?namespace=dynamic-us',
			},
			name: 'Dentarg',
			value: 1271,
			slug: 'dentarg',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1276?namespace=dynamic-us',
			},
			name: 'Andorhal',
			value: 1276,
			slug: 'andorhal',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1277?namespace=dynamic-us',
			},
			name: 'Executus',
			value: 1277,
			slug: 'executus',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1278?namespace=dynamic-us',
			},
			name: 'Dalvengyr',
			value: 1278,
			slug: 'dalvengyr',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1280?namespace=dynamic-us',
			},
			name: 'Black Dragonflight',
			value: 1280,
			slug: 'black-dragonflight',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1282?namespace=dynamic-us',
			},
			name: 'Altar of Storms',
			value: 1282,
			slug: 'altar-of-storms',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1283?namespace=dynamic-us',
			},
			name: 'Uldaman',
			value: 1283,
			slug: 'uldaman',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1284?namespace=dynamic-us',
			},
			name: 'Aerie Peak',
			value: 1284,
			slug: 'aerie-peak',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1285?namespace=dynamic-us',
			},
			name: 'Onyxia',
			value: 1285,
			slug: 'onyxia',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1286?namespace=dynamic-us',
			},
			name: 'Demon Soul',
			value: 1286,
			slug: 'demon-soul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1287?namespace=dynamic-us',
			},
			name: 'Gnomeregan',
			value: 1287,
			slug: 'gnomeregan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1288?namespace=dynamic-us',
			},
			name: 'Anvilmar',
			value: 1288,
			slug: 'anvilmar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1289?namespace=dynamic-us',
			},
			name: 'The Venture Co',
			value: 1289,
			slug: 'the-venture-co',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1290?namespace=dynamic-us',
			},
			name: 'Sentinels',
			value: 1290,
			slug: 'sentinels',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1291?namespace=dynamic-us',
			},
			name: 'Jaedenar',
			value: 1291,
			slug: 'jaedenar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1292?namespace=dynamic-us',
			},
			name: 'Tanaris',
			value: 1292,
			slug: 'tanaris',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1293?namespace=dynamic-us',
			},
			name: 'Alterac Mountains',
			value: 1293,
			slug: 'alterac-mountains',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1294?namespace=dynamic-us',
			},
			name: 'Undermine',
			value: 1294,
			slug: 'undermine',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1295?namespace=dynamic-us',
			},
			name: 'Lethon',
			value: 1295,
			slug: 'lethon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1296?namespace=dynamic-us',
			},
			name: 'Blackwing Lair',
			value: 1296,
			slug: 'blackwing-lair',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1297?namespace=dynamic-us',
			},
			name: 'Arygos',
			value: 1297,
			slug: 'arygos',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1342?namespace=dynamic-us',
			},
			name: 'Echo Isles',
			value: 1342,
			slug: 'echo-isles',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1344?namespace=dynamic-us',
			},
			name: 'The Forgotten Coast',
			value: 1344,
			slug: 'the-forgotten-coast',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1345?namespace=dynamic-us',
			},
			name: 'Fenris',
			value: 1345,
			slug: 'fenris',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1346?namespace=dynamic-us',
			},
			name: "Anub'arak",
			value: 1346,
			slug: 'anubarak',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1347?namespace=dynamic-us',
			},
			name: 'Blackwater Raiders',
			value: 1347,
			slug: 'blackwater-raiders',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1348?namespace=dynamic-us',
			},
			name: 'Vashj',
			value: 1348,
			slug: 'vashj',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1349?namespace=dynamic-us',
			},
			name: 'Korialstrasz',
			value: 1349,
			slug: 'korialstrasz',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1350?namespace=dynamic-us',
			},
			name: 'Misha',
			value: 1350,
			slug: 'misha',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1351?namespace=dynamic-us',
			},
			name: 'Darrowmere',
			value: 1351,
			slug: 'darrowmere',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1352?namespace=dynamic-us',
			},
			name: 'Ravenholdt',
			value: 1352,
			slug: 'ravenholdt',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1353?namespace=dynamic-us',
			},
			name: 'Bladefist',
			value: 1353,
			slug: 'bladefist',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1354?namespace=dynamic-us',
			},
			name: "Shu'halo",
			value: 1354,
			slug: 'shuhalo',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1355?namespace=dynamic-us',
			},
			name: 'Winterhoof',
			value: 1355,
			slug: 'winterhoof',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1356?namespace=dynamic-us',
			},
			name: 'Sisters of Elune',
			value: 1356,
			slug: 'sisters-of-elune',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1357?namespace=dynamic-us',
			},
			name: 'Maiev',
			value: 1357,
			slug: 'maiev',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1358?namespace=dynamic-us',
			},
			name: 'Rivendare',
			value: 1358,
			slug: 'rivendare',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1359?namespace=dynamic-us',
			},
			name: 'Nordrassil',
			value: 1359,
			slug: 'nordrassil',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1360?namespace=dynamic-us',
			},
			name: 'Tortheldrin',
			value: 1360,
			slug: 'tortheldrin',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1361?namespace=dynamic-us',
			},
			name: 'Cairne',
			value: 1361,
			slug: 'cairne',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1362?namespace=dynamic-us',
			},
			name: "Drak'Tharon",
			value: 1362,
			slug: 'draktharon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1363?namespace=dynamic-us',
			},
			name: 'Antonidas',
			value: 1363,
			slug: 'antonidas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1364?namespace=dynamic-us',
			},
			name: 'Shandris',
			value: 1364,
			slug: 'shandris',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1365?namespace=dynamic-us',
			},
			name: 'Moon Guard',
			value: 1365,
			slug: 'moon-guard',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1367?namespace=dynamic-us',
			},
			name: 'Nazgrel',
			value: 1367,
			slug: 'nazgrel',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1368?namespace=dynamic-us',
			},
			name: 'Hydraxis',
			value: 1368,
			slug: 'hydraxis',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1369?namespace=dynamic-us',
			},
			name: 'Wyrmrest Accord',
			value: 1369,
			slug: 'wyrmrest-accord',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1370?namespace=dynamic-us',
			},
			name: 'Farstriders',
			value: 1370,
			slug: 'farstriders',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1371?namespace=dynamic-us',
			},
			name: 'Borean Tundra',
			value: 1371,
			slug: 'borean-tundra',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1372?namespace=dynamic-us',
			},
			name: "Quel'dorei",
			value: 1372,
			slug: 'queldorei',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1373?namespace=dynamic-us',
			},
			name: 'Garrosh',
			value: 1373,
			slug: 'garrosh',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1374?namespace=dynamic-us',
			},
			name: "Mok'Nathal",
			value: 1374,
			slug: 'moknathal',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1375?namespace=dynamic-us',
			},
			name: 'Nesingwary',
			value: 1375,
			slug: 'nesingwary',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1377?namespace=dynamic-us',
			},
			name: 'Drenden',
			value: 1377,
			slug: 'drenden',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1425?namespace=dynamic-us',
			},
			name: 'Drakkari',
			value: 1425,
			slug: 'drakkari',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1427?namespace=dynamic-us',
			},
			name: 'Ragnaros',
			value: 1427,
			slug: 'ragnaros',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1428?namespace=dynamic-us',
			},
			name: "Quel'Thalas",
			value: 1428,
			slug: 'quelthalas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1549?namespace=dynamic-us',
			},
			name: 'Azuremyst',
			value: 1549,
			slug: 'azuremyst',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1555?namespace=dynamic-us',
			},
			name: 'Auchindoun',
			value: 1555,
			slug: 'auchindoun',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1556?namespace=dynamic-us',
			},
			name: 'Coilfang',
			value: 1556,
			slug: 'coilfang',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1557?namespace=dynamic-us',
			},
			name: 'Shattered Halls',
			value: 1557,
			slug: 'shattered-halls',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1558?namespace=dynamic-us',
			},
			name: 'Blood Furnace',
			value: 1558,
			slug: 'blood-furnace',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1559?namespace=dynamic-us',
			},
			name: 'The Underbog',
			value: 1559,
			slug: 'the-underbog',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1563?namespace=dynamic-us',
			},
			name: 'Terokkar',
			value: 1563,
			slug: 'terokkar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1564?namespace=dynamic-us',
			},
			name: "Blade's Edge",
			value: 1564,
			slug: 'blades-edge',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1565?namespace=dynamic-us',
			},
			name: 'Exodar',
			value: 1565,
			slug: 'exodar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1566?namespace=dynamic-us',
			},
			name: 'Area 52',
			value: 1566,
			slug: 'area-52',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1567?namespace=dynamic-us',
			},
			name: 'Velen',
			value: 1567,
			slug: 'velen',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1570?namespace=dynamic-us',
			},
			name: 'The Scryers',
			value: 1570,
			slug: 'the-scryers',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1572?namespace=dynamic-us',
			},
			name: 'Zangarmarsh',
			value: 1572,
			slug: 'zangarmarsh',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1576?namespace=dynamic-us',
			},
			name: 'Fizzcrank',
			value: 1576,
			slug: 'fizzcrank',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1578?namespace=dynamic-us',
			},
			name: 'Ghostlands',
			value: 1578,
			slug: 'ghostlands',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1579?namespace=dynamic-us',
			},
			name: 'Grizzly Hills',
			value: 1579,
			slug: 'grizzly-hills',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1581?namespace=dynamic-us',
			},
			name: 'Galakrond',
			value: 1581,
			slug: 'galakrond',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/1582?namespace=dynamic-us',
			},
			name: 'Dawnbringer',
			value: 1582,
			slug: 'dawnbringer',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3207?namespace=dynamic-us',
			},
			name: 'Goldrinn',
			value: 3207,
			slug: 'goldrinn',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3208?namespace=dynamic-us',
			},
			name: 'Nemesis',
			value: 3208,
			slug: 'nemesis',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3209?namespace=dynamic-us',
			},
			name: 'Azralon',
			value: 3209,
			slug: 'azralon',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3210?namespace=dynamic-us',
			},
			name: 'Tol Barad',
			value: 3210,
			slug: 'tol-barad',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3234?namespace=dynamic-us',
			},
			name: 'Gallywix',
			value: 3234,
			slug: 'gallywix',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3721?namespace=dynamic-us',
			},
			name: 'Caelestrasz',
			value: 3721,
			slug: 'caelestrasz',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3722?namespace=dynamic-us',
			},
			name: "Aman'Thul",
			value: 3722,
			slug: 'amanthul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3723?namespace=dynamic-us',
			},
			name: 'Barthilas',
			value: 3723,
			slug: 'barthilas',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3724?namespace=dynamic-us',
			},
			name: 'Thaurissan',
			value: 3724,
			slug: 'thaurissan',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3725?namespace=dynamic-us',
			},
			name: 'Frostmourne',
			value: 3725,
			slug: 'frostmourne',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3726?namespace=dynamic-us',
			},
			name: "Khaz'goroth",
			value: 3726,
			slug: 'khazgoroth',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3733?namespace=dynamic-us',
			},
			name: 'Dreadmaul',
			value: 3733,
			slug: 'dreadmaul',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3734?namespace=dynamic-us',
			},
			name: 'Nagrand',
			value: 3734,
			slug: 'nagrand',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3735?namespace=dynamic-us',
			},
			name: "Dath'Remar",
			value: 3735,
			slug: 'dathremar',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3736?namespace=dynamic-us',
			},
			name: "Jubei'Thos",
			value: 3736,
			slug: 'jubeithos',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3737?namespace=dynamic-us',
			},
			name: 'Gundrak',
			value: 3737,
			slug: 'gundrak',
		},
		{
			key: {
				href:
					'https://us.api.blizzard.com/data/wow/realm/3738?namespace=dynamic-us',
			},
			name: 'Saurfang',
			value: 3738,
			slug: 'saurfang',
		},
	]);
};

export default httpTrigger;
