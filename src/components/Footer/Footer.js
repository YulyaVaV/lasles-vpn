/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import './footer.scss'

import logo from './image/logo.png';
import facebook from './image/Facebook.png';
import twitter from './image/Twitter.png';
import instagram from './image/Instagram.png';
import { ListFooter } from './component/ListFooter';

const product = ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'];
const engage = ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'];
const earnMoney = ['Affiliate', 'Become Partner'];

export const Footer = ({data}) => {
  return (
    <div className="footer" id="help">
      <div className="footer__services">
        <div className="footer__logo">
          <a href="#" className="logo">
            <img src={logo} alt="logo"/>
          </a>
        </div>
        <p className="footer__text mainsubtitle"><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
        <div className="footer__icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener"
          >
            <img
              src={facebook}
              alt="facebook"
              className="footer__icon"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener"
          >
            <img
              src={twitter}
              alt="twitter"
              className="footer__icon"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
          >
            <img
              src={instagram}
              alt="instagram"
              className="footer__icon"
            />
          </a>
        </div>
        <p className="footer__data">{data}</p>
      </div>


      <div className="footer__lists">
        <ListFooter
          title='Product'
          lists={product}
        />
        <ListFooter
          title='Engage'
          lists={engage}
        />
        <ListFooter
          title='Earn Money'
          lists={earnMoney}
        />
      </div>
    </div>
  )
}

export default Footer;
