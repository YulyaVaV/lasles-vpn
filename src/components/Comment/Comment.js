import React from 'react';

import './comment.scss';
import Response from './component/Response';

import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';
import star from './images/star.png';

import left from './images/left.png';
import right from './images/right.png'

import '../../slider';

export const Comment = ({title, subtitle}) => {
  return (
    <div className="comment" id="testimonials">
      <div className="comment__top">
        <div className="comment__title maintitle">{title}</div>
        <div className="comment__subtitle mainsubtitle">{subtitle}</div>
      </div>
      <div class="slider">
        <div className="slider__container">
          <div className="slider__slide s1">
            <Response
              person={person1}
              name='Viezh Robert'
              city='Warsaw, Poland'
              count='4.5'
              star={star}
              comment='“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            />
            <Response
              person={person2}
              name='Yessica Christy'
              city='Shanxi, China'
              count='4.5'
              star={star}
              comment='“I like it because I like to travel far and still can connect with high speed.”.'
            />
            <Response
              person={person3}
              name='Kim Young Jou'
              city='Seoul, South Korea'
              count='4.5'
              star={star}
              comment='“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            />
          </div>
          <div className="toggler">
            <div className="toggler__radios">
              <input type="radio" className="toggler__radio" id="r1" name="order"></input>
                <label for="r1" className="toggler__label"></label>
              <input type="radio" className="toggler__radio" id="r2" name="order"></input>
                <label for="r2" className="toggler__label"></label>
              <input type="radio" className="toggler__radio" id="r3" name="order"></input>
                <label for="r3" className="toggler__label"></label>
            </div>

            <div className="toggler__buttons">
              <button className="toggler__button toggler__prev"><img src={left} alt="prevButton"/></button>
              <button className="toggler__button toggler__next"><img src={right} alt="nextButton"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;
