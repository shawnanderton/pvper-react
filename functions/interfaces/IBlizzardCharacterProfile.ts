import { IBlizzardName } from './IBlizzardName';
import { IEntity } from './IEntity';
import { IKey } from './IKey';


export interface IBlizzardCharacterProfile extends IEntity {
  _link: any;
  name: string;
  gender: IBlizzardName
  faction: IBlizzardName;
  race: IBlizzardDefaults;
  character_class: IBlizzardDefaults;
  active_spec: IBlizzardDefaults;
  realm: IBlizzardDefaults;
  guild: IBlizzardDefaults;
  level: number;
  experience: number;
  achievement_points: number;
  active_title: IBlizzardDefaults;
  equipped_item_level: number;
  average_item_level: number

}

interface IBlizzardDefaults extends IEntity {
  key: IKey;
  name: string;
}
