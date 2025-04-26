'use client';

import { useState } from 'react';
import { Horse } from './domain/models/Horse';
import { HorseApiClient } from './infrastructure/api/HorseApiClient';
import { SearchHorsesByHorseNameUseCase } from './application/usecases/SearchHorsesByHorseNameUseCase';
import SearchForm from './components/features/horse/SearchForm';
import HorseList from './components/features/horse/HorseList';
import { SearchDialog } from './components/features/horse/SearchDialog';
import { SearchHorsesByRaceUseCase } from './application/usecases/SearchHorsesByRaceUseCase';
import { SearchType } from './components/features/horse/type/SearchType';
import { FavoriteHorseService } from './infrastructure/api/FavoriteHorseService';

export default function HomePage() {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [loading, setLoading] = useState(false);

  const repository = new HorseApiClient();
  const searchHorsesByHorseNameUseCase = new SearchHorsesByHorseNameUseCase(repository);
  const searchHorsesByRaceUseCase = new SearchHorsesByRaceUseCase(repository);

  const handleSearch = async (keyword: SearchType) => {
    setLoading(true);
    try {
      switch(keyword.type){
        case "horceName":
          if(keyword.value == null || keyword.value == "") return;
          const horseNameSearchResult = await searchHorsesByHorseNameUseCase.execute(keyword.value);
          setHorses(horseNameSearchResult);
          break;
        case "raceId":
          if(keyword.value == null || keyword.value == "") return;
          const raceIdSearchResult = await searchHorsesByRaceUseCase.execute(keyword.value);
          setHorses(raceIdSearchResult);
          break;
        case "favorite":
          const favoriteService = FavoriteHorseService.getInstance();
          const favariteSearchResult = favoriteService.getAllFavorites();
          setHorses(favariteSearchResult);
          break
        default:
          return;
      }
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
