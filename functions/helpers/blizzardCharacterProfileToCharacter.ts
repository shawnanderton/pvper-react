import { REGIONS, PVPBRACKETS, BULKTYPES, Language } from './../enums/blizzard';
import { ICharacter } from './../interfaces/ICharacter';
import { IBlizzardCharacterProfile } from './../interfaces/IBlizzardCharacterProfile';
import { IPvpLeaderboardEntry } from '../interfaces/IBlizzard';
import { IPvpBracket } from '../interfaces/IPvpBracket';

function leaderboardEntryToCharacterNew(
	pvpEntry: IPvpLeaderboardEntry,
	bracket: PVPBRACKETS,
): ICharacter {
	const character: ICharacter = {
		blizzardId: pvpEntry.character.id,
		name: pvpEntry.character.name,
		[`current_${bracket}`]: {
			name: bracket,
			rank: pvpEntry.rank,
			rating: pvpEntry.rating,
			played: pvpEntry.season_match_statistics.played,
			won: pvpEntry.season_match_statistics.won,
			lost: pvpEntry.season_match_statistics.lost,
			date: Date.now(),
		},
		faction: pvpEntry.faction.type.toLowerCase(),
		realm: pvpEntry.character.realm.slug,
		region: REGIONS.NorthAmerica,
	};
	character.brackets = [character[`current_${bracket}`]];
	return character;
}

function leaderboardEntryToCharacterUpdate(
	pvpEntry: IPvpLeaderboardEntry,
	character: ICharacter,
	bracket: PVPBRACKETS,
): ICharacter {
	character.name = pvpEntry.character.name;
	character.realm = pvpEntry.character.realm.slug;
	character[`current_${bracket}`] = {
		name: bracket,
		rank: pvpEntry.rank,
		rating: pvpEntry.rating,
		played: pvpEntry.season_match_statistics.played,
		won: pvpEntry.season_match_statistics.won,
		lost: pvpEntry.season_match_statistics.lost,
		date: Date.now(),
	};

	character.brackets = [...character.brackets, character[`current_${bracket}`]];

	return character;
}

function addCharacterProfileToCharacter(
	character: ICharacter,
	characterProfile: IBlizzardCharacterProfile,
): ICharacter {
	character.faction = characterProfile.faction.type.toLowerCase();
	character.gender = characterProfile?.gender?.name[Language.ENGLISH_US];
	character.level = characterProfile?.level;
	character.itemLevel = characterProfile?.equipped_item_level;
	character.title = characterProfile?.active_title?.name[Language.ENGLISH_US];
	character.class = characterProfile?.character_class?.name[Language.ENGLISH_US];
	character.spec = characterProfile?.active_spec?.name[Language.ENGLISH_US];
	character.race = characterProfile?.race?.name[Language.ENGLISH_US];
	character.guild = characterProfile?.guild?.name;

	return character;
}

function convertLeaderBoardEntryToCharacter(
	pvpEntry: IPvpLeaderboardEntry,
	bracket: PVPBRACKETS,
	character?: ICharacter,
): { character: ICharacter; type: BULKTYPES } {
	if (character) {
		const currentBracket = character[`current_${bracket}`] as IPvpBracket;
		const pvpEntryBracket = pvpEntry.season_match_statistics;
		if (
			!currentBracket ||
			currentBracket.rank !== pvpEntry.rank ||
			currentBracket.played !== pvpEntryBracket.played
		) {
			return {
				character: leaderboardEntryToCharacterUpdate(
					pvpEntry,
					character,
					bracket,
				),
				type: BULKTYPES.Upsert,
			};
		}
		return { character: undefined, type: null };
	} else {
		return {
			character: leaderboardEntryToCharacterNew(pvpEntry, bracket),
			type: BULKTYPES.Create,
		};
	}
}

export {
	leaderboardEntryToCharacterNew,
	leaderboardEntryToCharacterUpdate,
	addCharacterProfileToCharacter,
	convertLeaderBoardEntryToCharacter,
};
