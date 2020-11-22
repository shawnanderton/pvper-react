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
	let whereClause = getWhereClause(classes, regions, realm, rating, bracket);

	const querySpec = {
		query: `SELECT c.name, c.current_${bracket}, c.faction, c.realm, c.gender, c.level, c.guild, c.itemLevel, c.title, c.class, c.spec, c.race, c.id from c
		${whereClause}
		ORDER BY c.current_${bracket}.rating DESC
		OFFSET ${(page - 1) * limit} LIMIT ${limit}`,
	};

	const { resources: items } = await container.items
		.query(querySpec)
		.fetchAll();
	return items;
}

async function getTotalCount(
	bracket: string,
	classes: string,
	regions: string,
	realm: string,
	rating: number,
) {
	let whereClause = getWhereClause(classes, regions, realm, rating, bracket);
	whereClause = whereClause
		? `${whereClause} AND c.current_${bracket} != null`
		: `WHERE c.current_${bracket} != null`;

	const querySpec = {
		query: `SELECT  COUNT(c) as total from c ${whereClause}`,
	};
	console.log(querySpec);
	// read all items in the Items container
	const { resources: items } = await container.items
		.query(querySpec)
		.fetchAll();
	return items[0].total;
}

function getWhereClause(
	classes: string,
	regions: string,
	realm: string,
	rating: number,
	bracket: string,
) {
	let whereClause = '';
	if (classes) {
		whereClause = `${whereClause} WHERE LOWER(c.class) IN ('${classes}')`;
	}
	if (regions) {
		whereClause = whereClause
			? `${whereClause} AND LOWER(c.region) IN ('${regions}')`
			: `${whereClause} WHERE LOWER(c.region) IN ('${regions}')`;
	}
	if (realm) {
		whereClause = whereClause
			? `${whereClause} AND LOWER(c.realm) = '${realm}'`
			: `${whereClause} WHERE LOWER(c.realm) = '${realm}'`;
	}
	if (rating > 0) {
		whereClause = whereClause
			? `${whereClause} AND c.current_${bracket}.rating > ${rating}`
			: `${whereClause} WHERE c.current_${bracket}.rating > ${rating}`;
	}
	return whereClause;
}

export default {
	saveCharacters,
	getAll,
	bulkSave,
	deleteCharacters,
	getLeaderboards,
	getTotalCount,
};
