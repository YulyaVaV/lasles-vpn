import React from 'react';

import './features.scss';

import imagetitle2 from './images/Illustration2.png';
import check from './images/Group.png';

export const Features = ({title, subtitle}) => {
  return (
    <div className="features" id="features">
      <div className="features__container">
        <div className="features__photo"><img src={imagetitle2} alt="featuresImage" className="features__image"/></div>
        <div className="features__wrap">
         <h2 className="features__title maintitle">{title}</h2>
         <p className="features__subtitle mainsubtitle">{subtitle}</p>
         <ul>
           <li className="features__list"><img src={check} alt="check" className="features__item"/>Powerfull online protection.</li>
           <li className="features__list"><img src={check} alt="check" className="features__item"/>Internet without borders.</li>
           <li className="features__list"><img src={check} alt="check" className="features__item"/>Supercharged VPN</li>
           <li className="features__list"><img src={check} alt="check" className="features__item"/>No specific time limits.</li>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Features;
