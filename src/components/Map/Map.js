import React from 'react';

import './map.scss';

import global from './img/HugeGlobal.png';
import redit from './img/redit.png';
import spotify from './img/spotify.png';
import netflix from './img/netflix.png';
import amazon from './img/amazon.png';
import discord from './img/discord.png';

export const Map = ({title}) => {
  return (
    <div className="map">
      <div className="map__container">
        <div className="map__top">
          <div className="map__title maintitle">{title}</div>
          <div className="map__subtitle mainsubtitle">See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</div>
        </div>
        <div className="map__img"><img src={global} alt="HugeGlobal" className="map__image"/></div>
          <div className="map__services">
          <div className="map__service"><img src={netflix} alt="netflix"/></div>
          <div className="map__service"><img src={redit} alt="redit"/></div>
          <div className="map__service"><img src={amazon} alt="amazon"/></div>
          <div className="map__service"><img src={discord} alt="discord"/></div>
          <div className="map__service"><img src={spotify} alt="spotify"/></div>
        </div>
      </div>
    </div>
  )
}

export default Map;
