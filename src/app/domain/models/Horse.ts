// 競走馬の型定義
export interface Horse {
    id: string;          // 馬ID
    name: string;        // 馬名
    gender: '牡' | '牝' | 'セン'; // 性別
    sire: string;        // 父馬名
    dam: string;         // 母馬名
    damSire: string;     // 母父馬名
    owner: string;       // 馬主
    breeder: string;     // 生産者
    totalPrizeMoney: number; // 総賞金（円）
    trainer?: string;    // 調教師（任意）
    birthyear?: string;  // 生産年（任意）
    image: string;       // 馬の画像URL
    detailUrl: string;   // Netkeibaの馬のURL
}