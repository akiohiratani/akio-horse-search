import { IHorseRepository } from "@/app/domain/repositories/IHorseRepository";
import { Horse } from "@/app/domain/models/Horse";

export class SearchHorsesUseCase {
  constructor(private repository: IHorseRepository) {}

  async execute(keyword: string): Promise<Horse[]> {
    return this.repository.searchHorses(keyword);
  }
}
