import React, { useEffect, useState } from 'react';

type Race = {
  id: number;
  name: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const mockRaces: Race[] = [
  { id: 1, name: '有馬記念' },
  { id: 2, name: '天皇賞（春）' },
  { id: 3, name: '天皇賞（秋）' },
  { id: 4, name: '日本ダービー' },
  { id: 5, name: '菊花賞' },
  { id: 6, name: '桜花賞' },
  { id: 7, name: '宝塚記念' },
  { id: 8, name: '安田記念' },
];

export const RaceListDialog = ({ isOpen, onClose }:Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setRaces([]);
      const timer = setTimeout(() => {
        setRaces(mockRaces);
        setIsLoading(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRaceClick = (raceId: number) => {
    // 今後ここで馬データ取得処理を実装
    console.log(`レースID: ${raceId} がクリックされました`);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden flex flex-col">
        {/* ヘッダー（透明感のあるモダンな色） */}
        <div
          className="flex justify-center items-center p-4 border-b"
          style={{
            backgroundColor: 'rgba(240, 248, 255, 0.8)', // 透明感のある淡いブルー（AliceBlueに近い）
            backdropFilter: 'saturate(180%) blur(10px)',
            WebkitBackdropFilter: 'saturate(180%) blur(10px)',
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900">レース一覧</h3>
        </div>

        {/* コンテンツ */}
        <div className="p-6 flex-grow overflow-y-auto max-h-[60vh]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">レース情報を読み込み中...</p>
              <p className="text-sm text-gray-500 mt-2">（10秒間お待ちください）</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {races.map((race) => (
                <li key={race.id} className="py-3">
                  <button
                    type="button"
                    onClick={() => handleRaceClick(race.id)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center group"
                  >
                    <span className="text-gray-800 group-hover:text-blue-600 font-medium">{race.name}</span>
                    <svg
                      className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* フッター */}
        <div className="border-t p-4 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};
