import { Horse } from '../models/Horse';

export interface IHorseRepository {
  searchHorsesByHorseName(keyword: string): Promise<Horse[]>;
  searchHorsesByRace(raceId: string): Promise<Horse[]>;
}