import React from 'react'

import './subscribe.scss'

export const Subscribe = ({title, subtitle}) =>{
  return (
    <div className="subscribe">
      <div className="subscribe__wrap">
        <div className="subscribe__title maintitle">{title}</div>
        <div className="subscribe__subtitle mainsubtitle">{subtitle}</div>
      </div>
      <button className="subscribe__button redbutton">Subscribe now</button>
    </div>
  )
}

export default Subscribe;
