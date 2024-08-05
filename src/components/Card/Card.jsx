import './Card.css';
import { useState } from 'react';
import { arrayCard } from './card.data';

function Card() {
  const [favourites, setFavourites] = useState([]);

  const handleFavouriteClick = (id) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(id)) {
        return prevFavourites.filter(favId => favId !== id);
      } else {
        return [...prevFavourites, id];
      }
    });
  };

  return (
    <div className='cards'>
      {arrayCard.map(card => (
        <div className='cards__block' key={card.id}>
          <img className='cards__image' src={card.src} alt="image" />
          <div className='cards__rating'>
            <img className='cards__rating-image' src="./icons/star.svg" alt="star" />
            <span className='cards__rating-value'>{card.rating}</span>
          </div>
          <p className='cards__title'>{card.title}</p>
          <div className='cards__favourites'
            onClick={() => handleFavouriteClick(card.id)}>
            <img
              className='cards__favourites-icon'
              src={favourites.includes(card.id) ? "./icons/bookmark.svg" : "./icons/like.svg"}
              alt="like"
            />
            <span className={`cards__favourites-text ${favourites.includes(card.id) ? ' cards__favourites-text active' : ''}`}>
              {favourites.includes(card.id) ? 'В избранном' : 'В избранное'}
            </span>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Card;