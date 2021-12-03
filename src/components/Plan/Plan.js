import React from 'react';
import { Card } from './component/Card';

import './component/plan.scss';

const freePlan = ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'];
const standartPlan = ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware'];
const premiumPlan = ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'];

export const Plan = ({title, subtitle}) => {
  return (
  <div className="plan" id="pricing">
    <div className="plan__top">
      <div className="plan__title maintitle">{title}</div>
      <div className="plan__subtitle mainsubtitle">{subtitle}</div>
    </div>

    <div className="plan__container">
      <Card
        title='Free Plan'
        data={freePlan}
        price='Free'
      />
      <Card
        title='Standart Plan'
        data={standartPlan}
        price='$9'
      />
      <Card
        title='Premium Plan'
        data={premiumPlan}
        price='$12'
      />      
    </div>
  </div>
  )
}

export default Plan;
