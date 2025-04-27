import Image from 'next/image';
import { Horse } from '@/app/domain/models/Horse';
import { FavoriteButton } from './FavoriteButton';
import { History } from '@/app/domain/models/History';

type Props = {
  horses: Horse[];
};

export default function HorseList({ horses }: Props) {
  if (horses.length === 0) {
    return <div className="text-center text-gray-500 mb-4">検索結果がありません</div>;
  }

  const getLastRace = (historys: History[]) =>{
    if(historys == null || historys.length == 0){
      return "";
    }
    const date = historys[0].date;
    const race_name = historys[0].race_name;
    const finish_position = historys[0].finish_position;

    return `${date} ${race_name} ${finish_position}着`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {horses.map((horse) => (
        <div
          key={horse.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <a
            onClick={() => window.open(horse.detailUrl, '_blank', 'noopener,noreferrer')}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xs aspect-[4/3] relative group"
          >
            <Image
              src={horse.image}
              alt={horse.name}
              fill
              className="object-cover rounded-md w-full h-full"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs rounded px-2 py-0.5 pointer-events-none">
              詳細
            </span>
          </a>
          <div className="mt-3 w-full flex flex-col items-start">
            <div className="font-bold text-lg">{horse.name}</div>
            <div className="text-sm text-gray-600">性別: {horse.sex}</div>
            <div className="text-sm text-gray-600">父: {horse.father}</div>
            <div className="text-sm text-gray-600">母父: {horse.grandfather}</div>
            <div className="text-sm text-gray-600">前回レース: {getLastRace(horse.historys)}</div>
          </div>
          <div className="mt-4 self-end">
            <FavoriteButton horse={horse} />
          </div>
        </div>
      ))}
    </div>
  );
}
