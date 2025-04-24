import { Race } from '../models/Race';

export interface IRaceRepository {
  searchRaces(): Promise<Race[]>;
}