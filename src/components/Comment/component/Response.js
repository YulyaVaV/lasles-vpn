import React from 'react';

import './response.scss';

export const Response = ({person, name, city, star, count, comment}) => {
  return (
    <div className="response">
      <div className="response__person">

        <div className="response__left">
          <div className="response__image">
          <img src={person} alt=""/>
        </div>
          <div className="response__block">
            <div className="response__name">{name}</div>
            <div className="response__city">{city}</div>
          </div>
        </div>
        
        <div className="response__right">
          <div className="response__count">{count}</div>
          <div className="response__star"><img src={star} alt="star"/></div>
        </div>
      
      </div>

      <div className="response__comment">{comment}</div>
    </div>
  )
}

export default Response;
