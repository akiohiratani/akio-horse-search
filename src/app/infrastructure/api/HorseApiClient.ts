import { IHorseRepository } from "@/app/domain/repositories/IHorseRepository";
import { Horse } from "@/app/domain/models/Horse";
import { HorseData as HorseResponseData } from "./data/HorseData";

export class HorseApiClient implements IHorseRepository {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  async searchHorsesByKeyword(keyword: string): Promise<Horse[]> {
    const response = await fetch(`${this.baseUrl}/api/v2/horses?word=${encodeURIComponent(keyword)}`);
    
    if (!response.ok) throw new Error('API request failed');
    
    const { data } = await response.json() as HorseResponseData;
    return data.map(item => this.transformItem(item));
  }

  async searchHorsesByRace(raceId: string): Promise<Horse[]> {
    const response = await fetch(`${this.baseUrl}/api/v2/race?id=${encodeURIComponent(raceId)}`);
    
    if (!response.ok) throw new Error('API request failed');
    
    const { data } = await response.json() as HorseResponseData;
    return data.map(item => this.transformItem(item));
  }

  private transformItem(item: HorseResponseData['data'][number]): Horse {
    console.log(item);
    return {
      id: item.id,
      name: item.name,
      sex: item.sex,
      image: item.image,
      father: item.father,
      grandfather: item.grandfather,
      title: item.title,
      detailUrl: `https://db.netkeiba.com/horse/${item.id}`, // IDを基にURLを生成
    };
  }
}
