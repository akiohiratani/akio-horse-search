'use client';

import { useState } from 'react';

type Props = {
  onSearch: (keyword: string) => void;
};

export default function SearchForm({ onSearch }: Props) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg shadow">
      <div className="flex gap-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="馬名を入力"
          className="flex-1 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          検索
        </button>
      </div>
    </form>
  );
}
