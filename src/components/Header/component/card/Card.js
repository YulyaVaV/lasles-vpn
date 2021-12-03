import React from 'react';

import './card.scss';

export const Card = ({img, count, title}) => {
  return (
    <div className="services">
      <div className="services__icon"><img src={img} alt=""/></div>
      
      <div className="services__item">
        <div className="services__count">{count}</div>
        <div className="services__name mainsubtitle">{title}</div>
      </div>
    </div>
  )
}
