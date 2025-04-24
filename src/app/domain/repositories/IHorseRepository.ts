import { Horse } from '../models/Horse';

export interface IHorseRepository {
  searchHorsesByKeyword(keyword: string): Promise<Horse[]>;
  searchHorsesByRace(raceId: string): Promise<Horse[]>;
}