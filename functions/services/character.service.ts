import { FeedResponse, OperationInput, OperationResponse } from '@azure/cosmos';
import { wait } from '../helpers/utils';
import { PVPBRACKETS, REGIONS } from './../enums/blizzard';
import { ICharacter } from './../interfaces/ICharacter';
import containers from './cosmosConfig';
const { characters: container } = containers;

const sprocId = 'bulkCharacterSave';
const waitTime = 1000;

async function getAll(): Promise<FeedResponse<ICharacter>> {
	try {
		return await container.items.readAll<ICharacter>().fetchAll();
	} catch (error) {
		throw error;
	}
}

async function deleteCharacters(characters: ICharacter[]) {
	try {
		for (let c of characters) {
			await container.item(c.id, REGIONS.NorthAmerica).delete();
		}
	} catch (error) {
		console.log(error);
	}
}

async function bulkSave(
	operations: OperationInput[],
): Promise<OperationResponse[]> {
	const responses: OperationResponse[] = [];
	try {
		while (operations.length) {
			let res = await container.items.bulk(operations.splice(0, 25));
			await wait(waitTime);
			responses.push(...res);
		}
		return responses;
	} catch (error) {
		console.log(error.message);
	}
}

async function saveCharacters(characters: ICharacter[], bracket: PVPBRACKETS) {
	try {
		const partitionKey = REGIONS.NorthAmerica;
		const result = await container.scripts
			.storedProcedure(sprocId)
			.execute(partitionKey, [characters, bracket]);
		return result;
	} catch (error) {
		console.log(error.message);
		return null;
	}
}

async function getLeaderboards(
	bracket: string,
	page: number,
	limit: number,
	classes: string,
	regions: string,
	realm: string,
	rating: number,
): Promise<ICharacter[]> {
	console.log(`Querying container: Items`);
	let whereClause = '';
	if (classes) {
		whereClause = `${whereClause} WHERE c.class IN (${classes})`;
	}
	if (regions) {
		whereClause = whereClause
			? `${whereClause} AND c.region IN (${regions})`
			: `${whereClause} WHERE c.region IN (${regions})`;
	}
	if (regions) {
		whereClause = whereClause
			? `${whereClause} AND LOWER(c.realm) = ${realm}`
			: `${whereClause} WHERE LOWER(c.realm) = ${realm}`;
	}
	if (rating > 0) {
		whereClause = whereClause
			? `${whereClause} AND c.rating > ${rating}`
			: `${whereClause} WHERE c.rating = ${rating}`;
	}

	const querySpec = {
		query: `SELECT c.name, c.current_${bracket}, c.faction, c.realm, c.gender, c.level, c.itemLevel, c.title, c.class, c.spec, c.race, c.id from c
		 ORDER BY c.current_${bracket}.rating DESC
		 ${whereClause ? whereClause : ''}
		 OFFSET ${(page - 1) * limit} LIMIT ${limit}`,
	};

	// read all items in the Items container
	const { resources: items } = await container.items
		.query(querySpec)
		.fetchAll();
	return items;
}
async function getTotalCount(bracket: string) {
	console.log(`Querying container: Items`);

	const querySpec = {
		query: `SELECT  COUNT(c) as total from c WHERE c.current_${bracket} != null`,
	};

	// read all items in the Items container
	const { resources: items } = await container.items
		.query(querySpec)
		.fetchAll();
	return items[0].total;
}

export default {
	saveCharacters,
	getAll,
	bulkSave,
	deleteCharacters,
	getLeaderboards,
	getTotalCount,
};
