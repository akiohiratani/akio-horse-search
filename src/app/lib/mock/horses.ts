import { faker } from '@faker-js/faker/locale/ja';
import { Horse } from '@/app/types/Horse';

// 有名な種牡馬リスト（ダミーデータ生成用）
const SIRE_LIST = [
  'サンデーサイレンス',
  'ディープインパクト',
  'キングカメハメハ',
  'ロードカナロア',
  'ハーツクライ',
  'エピファネイア',
  'モーリス',
  'ドゥラメンテ'
];

// 有名な繁殖牝馬リスト（ダミーデータ生成用）
const DAM_LIST = [
  'ウインドインハーヘア',
  'シーザリオ',
  'ビワハヤヒデ',
  'ダイワスカーレット',
  'ウオッカ',
  'アグネスタキオン',
  'シンボリクリスエス'
];

// 生産牧場リスト（ダミーデータ生成用）
const BREEDER_LIST = [
  'ノーザンファーム',
  'シャトーサンマルタン',
  '社台ファーム',
  'キーファーズ',
  '白老ファーム',
  '追分ファーム',
  '日高スタリオンステーション'
];

export const generateHorses = (count: number): Horse[] => {
  return Array.from({ length: count }, (_, index) => {
    const gender = faker.helpers.arrayElement(['牡', '牝', 'セン']);
    const sire = faker.helpers.arrayElement(SIRE_LIST);
    const dam = faker.helpers.arrayElement(DAM_LIST);
    const damSire = faker.helpers.arrayElement(SIRE_LIST);

    return {
      id: `horse-${String(index + 1).padStart(4, '0')}`,
      name: `${faker.word.adjective()} ${faker.word.noun()}`,
      gender,
      photoPath: `/images/horses/${gender}/${String(index + 1).padStart(4, '0')}.jpg`,
      sire,
      dam,
      damSire,
      owner: `${faker.person.lastName()}${faker.person.firstName()}厩舎`,
      breeder: faker.helpers.arrayElement(BREEDER_LIST),
      totalPrizeMoney: faker.number.int({
        min: 1000000,
        max: 500000000
      })
    };
  });
};

// 検索用関数
export const searchHorses = (
  horses: Horse[],
  keyword: string
): Horse[] => {
  if (!keyword.trim()) return [];

  const lowerKeyword = keyword.toLowerCase();
  
  return horses.filter(horse =>
    horse.name.toLowerCase().includes(lowerKeyword) ||
    horse.sire.toLowerCase().includes(lowerKeyword) ||
    horse.dam.toLowerCase().includes(lowerKeyword) ||
    horse.damSire.toLowerCase().includes(lowerKeyword) ||
    horse.owner.toLowerCase().includes(lowerKeyword) ||
    horse.breeder.toLowerCase().includes(lowerKeyword)
  );
};
