'use client';

import { useState } from 'react';
import { RaceListDialog } from './RaceListDialog';
import { SearchType } from './type/SearchType';

type Props = {
  onSearch: (keyword: SearchType) => void;
};

export default function SearchForm({ onSearch }: Props) {
  const [horseName, setHorseName] = useState('');
  const [isRaceListDialogOpen, setIsRaceListDialog] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      "type":"horceName",
      "value":horseName
    });
  };

  const handleRaceSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setHorseName(''); // テキストボックスをクリア
    setIsRaceListDialog(true); // レースから取得
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 bg-gray-100 p-4 rounded-2xl shadow mx-auto"
    >
      <input
        type="text"
        value={horseName}
        onChange={e => setHorseName(e.target.value)}
        placeholder="馬名を入力"
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-base"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-full bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 transition"
      >
        検索
      </button>
      <button
        type="button"
        onClick={handleRaceSearch}
        className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 bg-white text-base font-semibold hover:bg-blue-50 transition"
      >
        レースから
      </button>
      <RaceListDialog
        isOpen = {isRaceListDialogOpen}
        onClose={() => setIsRaceListDialog(false)}></RaceListDialog>
    </form>
  );
}
