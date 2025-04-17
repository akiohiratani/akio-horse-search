import { IHorseRepository } from "@/app/domain/repositories/IHorseRepository";
import { Horse } from "@/app/domain/models/Horse";

interface ApiResponse {
  data: {
    id: string;
    name: string;
    sex: '牡' | '牝' | 'セン';
    sire: string;
    dam: string;
    bms: string;
    owner: string;
    breeder: string;
    prize: string;
    trainer?: string;
    birthyear?: string;
    image: string;
  }[];
}

export class HorseApiClient implements IHorseRepository {
  private readonly baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  async searchHorses(keyword: string): Promise<Horse[]> {
    const response = await fetch(`${this.baseUrl}/api/horses?word=${encodeURIComponent(keyword)}`);
    
    if (!response.ok) throw new Error('API request failed');
    
    const { data } = await response.json() as ApiResponse;
    return data.map(item => this.transformItem(item));
  }

  private transformItem(item: ApiResponse['data'][number]): Horse {
    return {
      id: item.id,
      name: item.name,
      gender: item.sex,
      sire: item.sire,
      dam: item.dam,
      damSire: item.bms,
      owner: item.owner,
      breeder: item.breeder,
      totalPrizeMoney: parseFloat(item.prize.replace(/,/g, '')) * 10000,
      trainer: item.trainer,
      birthyear: item.birthyear,
      image: item.image,
      detailUrl: `https://db.netkeiba.com${item.id}`, // IDを基にURLを生成
    };
  }
}
