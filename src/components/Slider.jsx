import React from 'react'
import css from '/home/janewmwaura/ecommerce/amazon-starterpack/src/components/Slider.css'
import  {Swiper, SwiperSlide}  from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
 //import swiper styles

 import 'swiper/css'
 import 'swiper/css/pagination'
 import 'swiper/css/navigation'

 import {SliderProducts} from '/home/janewmwaura/ecommerce/amazon-starterpack/src/data/products.js'
const Slider = () => {
  return (
   <div className="s-container">
       <Swiper
       modules={[Pagination, Navigation]}
       className='mySwiper'
       navigation={true}
       loopFillGroupWithBlank={true}
       slidesPerView={3}
       spaceBetween={40}
       slidesPerGroup={1}
       loop={true}
       >
        {SliderProducts.map((slide, i)=> (
        <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="product" className='img-p'/>
        </SwiperSlide>
      ))}
       </Swiper>
   </div>
  )
}

export default Slider