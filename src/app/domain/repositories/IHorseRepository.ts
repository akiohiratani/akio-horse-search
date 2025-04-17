import { Horse } from '../models/Horse';

export interface IHorseRepository {
  searchHorses(keyword: string): Promise<Horse[]>;
}