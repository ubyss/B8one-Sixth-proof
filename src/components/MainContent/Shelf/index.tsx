import { getProducts } from './../../../__mocks__/mockApis.js'
import ProductCard from './ProductCard/index.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Shelf = () => {

    const products = getProducts()

  return (
    <div className="shelf__content">
        <div className="shelf__text">
            <h3 className="shelf__text-title">Destaques da semana</h3>
            <span className="shelf__text-description">Ofertas que vão deixar sua semana ainda mais especial.</span>
        </div>

        <div className="shelf__products-container">
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={6} loop={true} className="mySwiper">
        
            {products.map((product: any, index:number) => (
              <SwiperSlide key={index}>
            <ProductCard key={product.id} product={product} />
            </SwiperSlide>
            ))}
                    
      </Swiper>
        </div>
    </div>
  )
}

export default Shelf