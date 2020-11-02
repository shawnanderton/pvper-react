import { REGIONS, PVPBRACKETS } from './../enums/blizzard';
import { ICharacter } from './../interfaces/ICharacter';
import { IBlizzardCharacterProfile } from './../interfaces/IBlizzardCharacterProfile';
import { IPvpLeaderboardEntry } from '../interfaces/IBlizzard';

export default function blizzardCharacterToCharacter(
	characterLeaderboardProfile: IPvpLeaderboardEntry,
	characterProfile: IBlizzardCharacterProfile,
	bracket: PVPBRACKETS,
): ICharacter {
	const character: ICharacter = {
		blizzardId: characterLeaderboardProfile.character.id,
		name: characterLeaderboardProfile.character.name,
		bracket: {
			name: bracket,
			rank: characterLeaderboardProfile.rank,
			rating: characterLeaderboardProfile.rating,
			played: characterLeaderboardProfile.season_match_statistics.played,
			won: characterLeaderboardProfile.season_match_statistics.won,
			lost: characterLeaderboardProfile.season_match_statistics.lost,
		},
		faction: characterLeaderboardProfile.faction.type.toLowerCase(),
		realm: characterLeaderboardProfile.character.realm.slug,
		gender: characterProfile?.gender?.name['en_US'],
		level: characterProfile?.level,
		itemLevel: characterProfile?.equipped_item_level,
		title: characterProfile?.active_title?.name['en_US'],
		class: characterProfile?.character_class?.name['en_US'],
		spec: characterProfile?.active_spec?.name['en_US'],
		race: characterProfile?.race?.name['en_US'],
		guild: characterProfile?.guild?.name,
		region: REGIONS.NorthAmerica,
	};
	return character;
}
