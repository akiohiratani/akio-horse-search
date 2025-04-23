import { IHorseRepository } from "@/app/domain/repositories/IHorseRepository";
import { Horse } from "@/app/domain/models/Horse";

interface ApiResponse {
  data: {
    id: string;
    name: string;
    sex: string;
    image: string;
    father: string;
    grandfather: string;
    title: string;
  }[];
}

export class HorseApiClient implements IHorseRepository {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  async searchHorses(keyword: string): Promise<Horse[]> {
    const response = await fetch(`${this.baseUrl}/api/v2/horses?word=${encodeURIComponent(keyword)}`);
    
    if (!response.ok) throw new Error('API request failed');
    
    const { data } = await response.json() as ApiResponse;
    return data.map(item => this.transformItem(item));
  }

  private transformItem(item: ApiResponse['data'][number]): Horse {
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
