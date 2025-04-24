// src/presentation/pages/HomePage.tsx
'use client';

import { useState } from 'react';
import { Horse } from './domain/models/Horse';
import { HorseApiClient } from './infrastructure/api/HorseApiClient';
import { SearchHorsesUseCase } from './application/usecases/SearchHorsesUseCase';
import SearchForm from './components/features/horse/SearchForm';
import HorseList from './components/features/horse/HorseList';
import { SearchDialog } from './components/features/horse/SearchDialog';

export default function HomePage() {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [loading, setLoading] = useState(false);

  const repository = new HorseApiClient();
  const searchUseCase = new SearchHorsesUseCase(repository);

  const handleSearch = async (keyword: string) => {
    setLoading(true);
    try {
      const result = await searchUseCase.execute(keyword);
      setHorses(result);
    } catch (error) {
      console.error('検索エラー:', error);
      alert('検索に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">競走馬検索</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <SearchDialog isOpen={loading} message="検索中..."/>
      ) : (
        <HorseList horses={horses} />
      )}
    </div>
  );
}
