import React from 'react';
import BenefitsBar from '../BenefitsBar';

import fullBanner from './../../assets/full-banner.png'
import Shelf from './Shelf';

const MainContent: React.FC = ({  }) => {
  return (
    <div className="main-content">
        <img src={fullBanner} alt="full banner" className="main-content--full-banner"/>

      <BenefitsBar />
      <Shelf />
    </div>
  );
};

export default MainContent;
