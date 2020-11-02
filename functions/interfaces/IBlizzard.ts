import { IEntity } from './IEntity';
import { IKey } from './IKey';


export interface IPvpLeaderboard {
  entries: IPvpLeaderboardEntry[];
  season: ISeason;
  name: string;
  bracket: IBracket;
}

interface ISeason extends IEntity {
  key: IKey;
}
interface IBracket extends IEntity {
  type: string;
}

export interface IPvpLeaderboardEntry {
  character: ICharacter;
  faction: IFaction;
  rank: number;
  rating: number;
  season_match_statistics: IStatistics;
  tier: ITier;
}

interface ICharacter extends IEntity {
  name: string;
  realm: IRealm;
}

interface IRealm extends IEntity {
  key: IKey;
  slug: string;
}

export interface IFaction {
  type: string;
}

interface IStatistics {
  played: number;
  won: number;
  lost: number;
}
interface ITier extends IEntity {
  key: IKey;
}
