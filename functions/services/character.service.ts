import { REGIONS } from './../enums/blizzard';
import { ICharacter } from './../interfaces/ICharacter';
import containers from './cosmosConfig';
const { characters: container } = containers;

const sprocId = 'BulkCharacterSave';

async function saveCharacters(characters: ICharacter[]) {
	try {
		const partitionKey = REGIONS.NorthAmerica;
		const result = await container.scripts
			.storedProcedure(sprocId)
			.execute(partitionKey, [characters]);
		return result;
	} catch (error) {
		console.log(error.message);
		return null;
	}
}

export { saveCharacters };
