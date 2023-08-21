import React from 'react';
import BenefitsBar from '../BenefitsBar';
import Shelf from './Shelf';

import { getBanners } from './../../__mocks__/mockApis'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface Banner {
  imageUrl: string;
}

const MainContent: React.FC = ({ }) => {
  const banners = getBanners()


  return (
    <div className="main-content">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {banners.map((banner: Banner, index: number) => (
        <SwiperSlide key={index}>
          <img src={banner.imageUrl} alt="banner image" className="main-content--full-banner" />
        </SwiperSlide>
      ))}
      </Swiper>
      <BenefitsBar />
      <Shelf />
    </div>
  );
};

export default MainContent;
