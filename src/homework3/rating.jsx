import React, { useState } from 'react';
import './rating.css';

/*const ratingList = [
  'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',
  'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
  'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
  'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
];*/

 const ratingList = [
        'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
        'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
        'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
        'https://www.clipartmax.com/png/small/67-676998_for-all-the-reasons-i-have-given-above-i-give-this-4.png',
        'https://www.clipartmax.com/png/small/67-676995_5-star-rating-png.png',
    ]; 



const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-container">
      {/* Заголовок с иконкой "Рейтинг" */}
      <div className="rating-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          alt="Рейтинг"
          className="rating-icon"
        />
        <h2>Рейтинг</h2>
      </div>

      {/* Изображение текущего рейтинга */}
      <img
        src={ratingList[ratingValue]}
        alt={`Рейтинг ${ratingValue + 1}`}
        className="rating-image"
      />
      <div className="button-group">
        <button onClick={() => setRatingValue(3)}>Плохо</button>
        <button onClick={() => setRatingValue(2)}>Приемлемо</button>
        <button onClick={() => setRatingValue(1)}>Хорошо</button>
        <button onClick={() => setRatingValue(0)}>Отлично</button>
      </div>
    </div>
  );
};

export default Rating;
