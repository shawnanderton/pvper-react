import { CosmosClient } from '@azure/cosmos';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const endpoint = process.env.CORE_API_URL;
const masterKey = process.env.CORE_API_KEY;

const databaseDefName = 'blizzard';
const characterContainerName = 'Characters';

const client = new CosmosClient({ endpoint, key: masterKey });

const containers = {
	characters: client
		.database(databaseDefName)
		.container(characterContainerName),
};

export default containers;
