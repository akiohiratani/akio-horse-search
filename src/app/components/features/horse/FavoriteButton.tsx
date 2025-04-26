import { useState, useEffect } from 'react';
import { Horse } from '@/app/domain/models/Horse';
import { FavoriteHorseService } from '@/app/infrastructure/api/FavoriteHorseService';

type Props = {
  horse: Horse;
}

export const FavoriteButton = ({ horse }: Props) => {
  const favoriteService = FavoriteHorseService.getInstance();
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    setIsFavorite(favoriteService.isFavorite(horse.id));
  }, [horse.id]);
  
  const toggleFavorite = () => {
    if (isFavorite) {
      favoriteService.removeFavorite(horse.id);
    } else {
      favoriteService.addFavorite(horse);
    }
    setIsFavorite(!isFavorite);
  };
  
  return (
    <button 
      onClick={toggleFavorite}
      className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`}
    >
      {isFavorite ? '★ お気に入り解除' : '☆ お気に入り追加'}
    </button>
  );
}
