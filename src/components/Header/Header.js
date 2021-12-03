/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './header.scss';

import logo from '../../images/logo.png';
import imagetitle from '../../images/Illustration1.png';
import users from '../../images/user.png';
import locations from '../../images/location.png';
import serves from '../../images/Server.png';
import { Card } from './component/card/Card';

export const Header = () => {
  return (
    <header className="header" id="about">
      <div className="header__wrap">

        <div className="header__content">
          <div className="header__logo">
            <a href="#" className="logo"><img src={logo} alt="logo"/></a>
          </div>
          <div class="header__nav">
            <nav class="nav mainsubtitle">
              <a href="#about" className="nav__link">About</a>
              <a href="#features" className="nav__link">Features</a>
              <a href="#pricing" className="nav__link">Pricing</a>
              <a href="#testimonials" className="nav__link">Testimonials</a>
              <a href="#help" className="nav__link help">Help</a>
            </nav>
          </div>
        </div>

        <div className="header__button">
          <button className="header__signIn">Sign In</button>
          <button className="header__signUp whitebutton">Sign Up</button>
        </div>
      </div>

      <div className="header__main">
        <div className="header__container">
          <div className="header__wrapper">
            <p className="header__title">Want anything to be easy with <b>LaslesVPN</b>.</p>
            <p className="header__subtitle mainsubtitle">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>
            <button className="redbutton">Get Started</button>
          </div>
          <div className="header__photo"><img src={imagetitle} alt="headerPhoto" className="header__image"/></div>
        </div>
      </div>

      <div className="header__services">
        <Card
          img={users}
          count='90+'
          title='Users'
        />
        <Card
          img={locations}
          count='30+'
          title='Locations'
        />
        <Card
          img={serves}
          count='50+'
          title='Servers'
        />
      </div>
    </header>
  );
};
