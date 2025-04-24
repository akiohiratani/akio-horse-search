import { IRaceRepository } from "@/app/domain/repositories/IRaceRepository";
import { Race } from "@/app/domain/models/Race";

export class SearchRacesUseCase {
  constructor(private repository: IRaceRepository) {}

  async execute(): Promise<Race[]> {
    return this.repository.searchRaces();
  }
}
