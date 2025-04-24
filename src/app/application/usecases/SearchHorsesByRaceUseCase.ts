import { IHorseRepository } from "@/app/domain/repositories/IHorseRepository";
import { Horse } from "@/app/domain/models/Horse";

export class SearchHorsesByRaceUseCase {
  constructor(private repository: IHorseRepository) {}

  async execute(raceId: string): Promise<Horse[]> {
    return this.repository.searchHorsesByRace(raceId);
  }
}
