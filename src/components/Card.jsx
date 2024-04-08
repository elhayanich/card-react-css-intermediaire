import style from "./card.module.css";
import { useState } from 'react';

function Card() {
  const [rating, setRating] = useState(0); 
  const handleRating = (value) => {
    setRating(value); 
  };
 return (
    <>
    <div className={style.container}>
      <img className={style.cardimage} src='https://i.redd.it/z2h2icfuz3z41.jpg' alt='song cover' />
      <div className='description'>
         <h2>Heartless</h2>
         <ul className ={style.cardinformations}>
            <li>Artist : The Weeknd</li>
            <li>Album : After Hours</li>
            <li>Release date : 2019</li>
         </ul>
         <a href='https://www.youtube.com/watch?v=1DpH-icPpl0&ab_channel=TheWeekndVEVO' target='_blank' className='card-song'>Listen here </a>
         <div className={style.ratingSection}>
            <p>Rate this single :</p>
            <div className={style.stars}>
              {[1, 2, 3].map((star, index) => (
                <span 
                  key={index}
                  className={index < rating ? style.selectedStar : style.star} 
                  onClick={() => handleRating(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
         </div>
      </div>
    </div>
    
    </>
 )
}

export default Card
