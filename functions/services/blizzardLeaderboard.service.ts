import axios from 'axios';
import { PVPBRACKETS, REGIONS, Namespace } from '../enums/blizzard';
import { IBlizzardCharacterProfile } from '../interfaces/IBlizzardCharacterProfile';

async function getLeaderboard(
  region: REGIONS,
  pvpSeasonId: number,
  pvpBracket: PVPBRACKETS,
  token: string
) {
  const url = `https://${region}.api.blizzard.com/data/wow/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}?namespace=${Namespace.Dynamic}-${region}&access_token=${token}`;
  const response = await axios.get(url);
  return response.data;
}
function getUrl(
  region: REGIONS,
  pvpSeasonId: number,
  pvpBracket: PVPBRACKETS,
  token: string
) {
  return 
}

async function getCharacterProfile(
  region: REGIONS,
  realmSlug: string,
  characterName: string,
  token: string
) : Promise<IBlizzardCharacterProfile> {
  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}?namespace=${Namespace.Profile}-${region}&access_token=${token}`;
  try {
  const response = await axios.get(url);
  return response.data;
} catch(error) {
  return null;
}
}

export { getLeaderboard, getCharacterProfile  };
