import React from 'react';

import {List} from './List';

import box from '../img/Free.png';

export const Card = ({title, data, price}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={box} alt="box" className="card__img"/>
      </div>
      <p className="card__title">{title}</p>

      <div className="card__container">
        <List
          data={data}
        />

        <div className="card__wrap">
          {price === 'Free' ? (
            <p className="card__price">{price}</p>
          ) : (
            <p className="card__price">{price}<span className="card__price--light"> / mo</span></p>
          )}
          <button className="card__button whitebutton">Select</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
