import React from 'react'

import green from '../img/green.png';

export const List = ({data}) => {
  return (
    <div className="card__list">
      {
        data.map((item) => (
          <>
            <div className="card__check">
             <img src={green} alt="checkButton" className="card__green"/>
             <li className="card__item">{item}</li>
            </div>
          </>
        ))
      }
    </div>
  )
}

