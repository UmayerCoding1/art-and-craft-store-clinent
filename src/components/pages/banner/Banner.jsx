// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SliderOne from '../../sliders/SliderOne';
import SliderTow from '../../sliders/SliderTow';
import SliderThree from '../../sliders/SliderThree';
import SliderFour from '../../sliders/SliderFour';
const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
           <SliderOne/>
        </SwiperSlide>
            {/*  */}
        <SwiperSlide>
             <SliderTow/>
        </SwiperSlide>
           {/*  */}
        <SwiperSlide>
             <SliderThree/>
        </SwiperSlide>
            {/*  */}
        <SwiperSlide>
              <SliderFour/>
        </SwiperSlide>

        
      </Swiper>
        </div>
    );
};

export default Banner;