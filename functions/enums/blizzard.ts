import { BulkOperationType } from '@azure/cosmos';
export enum PVPBRACKETS {
	ARENA_2v2 = '2v2',
	ARENA_3v3 = '3v3',
	RGB = 'rbg',
}

export enum REGIONS {
	NorthAmerica = 'us',
	Europe = 'eu',
}

export enum Language {
	ENGLISH_US = 'en_US',
}

export enum Namespace {
	Static = 'static',
	Dynamic = 'dynamic',
	Profile = 'profile',
}

export enum BULKTYPES {
	Create = 'Create',
	Upsert = 'Upsert',
	Read = 'Read',
	Delete = 'Delete',
	Replace = 'Replace',
}
