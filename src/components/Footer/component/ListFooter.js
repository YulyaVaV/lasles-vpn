import React from 'react'

import './lists.scss'

export const ListFooter = ({lists, title}) => {
  return (
    <div className="list">
      <p className="list__title">{title}</p>
      {
        lists.map((item) => (
          <li className="list__item mainsubtitle">{item}</li>
        ))
      }
    </div>
  )
}

