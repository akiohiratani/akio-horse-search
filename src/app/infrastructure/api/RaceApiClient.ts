import { IRaceRepository } from "@/app/domain/repositories/IRaceRepository";
import { Race } from "@/app/domain/models/Race";
import { RaceData as RaceResponseData } from "./data/RaceData";

export class RaceApiClient implements IRaceRepository {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  async searchRaces(): Promise<Race[]> {
    const response = await fetch(`${this.baseUrl}/api/v2/races/g_race`);
    
    if (!response.ok) throw new Error('API request failed');
    
    const { data } = await response.json() as RaceResponseData;
    return data.map(item => this.transformItem(item));
  }

  private transformItem(item: RaceResponseData['data'][number]): Race {
    console.log(item);
    return {
      id: item.id,
      name: item.name,
      place: item.place,
      date: item.date,
      distance: item.distance
    };
  }
}
