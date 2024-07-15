import styles from './Card.module.css';
import { useState } from 'react';
import { arrayCard } from './card.data';
import cn from 'classnames';

function Card() {
  const [favourites, setFavourites] = useState(new Set());

  const handleFavouriteClick = (id) => {
    setFavourites((prevFavourites) => {
      const newFavourites = new Set(prevFavourites);
      if (newFavourites.has(id)) {
        newFavourites.delete(id);
      } else {
        newFavourites.add(id);
      }

      return newFavourites;
    });
  };

  return (
    <div className={styles['cards']}>
      {arrayCard.map(card => (
        <div className={styles['cards__block']} key={card.id}>
          <img className={styles['cards__image']} src={card.src} alt="image" />
          <div className={styles['cards__rating']}>
            <img className={styles['cards__rating-image']} src="./icons/star.svg" alt="star" />
            <span className={styles['cards__rating-value']}>{card.rating}</span>
          </div>
          <p className={styles['cards__title']}>{card.title}</p>
          <div className={styles['cards__favourites']}
            onClick={() => handleFavouriteClick(card.id)}>
            <img
              className={styles['cards__favourites-icon']}
              src={favourites.has(card.id) ? "./icons/bookmark.svg" : "./icons/like.svg"}
              alt="like"
            />
            <span className={cn(styles['cards__favourites-text'], {
              [styles['cards__favourites-text--active']]: favourites.has(card.id),
            })}>
              {favourites.has(card.id) ? 'В избранном' : 'В избранное'}
            </span>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Card;