import Image from 'next/image';
import { Horse } from '@/app/domain/models/Horse';

type Props = {
  horses: Horse[];
};

export default function HorseList({ horses }: Props) {
  if (horses.length === 0) {
    return <div className="text-center text-gray-500">検索結果がありません</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {horses.map((horse) => (
        <div 
          key={horse.id}
          className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:bg-blue-50"
          onClick={() => window.open(horse.detailUrl, '_blank', 'noopener,noreferrer')}
          role="link"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') window.open(horse.detailUrl, '_blank', 'noopener,noreferrer');
          }}>
          <div className="relative h-48 mb-4">
            <Image
              src={horse.image}
              alt={horse.name}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">{horse.name}</h3>
          <div className="mt-2 space-y-2">
            <p>性別: {horse.gender}</p>
            <p>父: {horse.sire}</p>
            <p>母父: {horse.damSire}</p>
            <p>賞金: {horse.totalPrizeMoney.toLocaleString()}円</p>
          </div>
        </div>
      ))}
    </div>
  );
}
