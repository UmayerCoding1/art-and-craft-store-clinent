import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import i1 from './../../../assets/image/gelarry/1.jpeg'
import i2 from './../../../assets/image/gelarry/2.jpg'
import i3 from './../../../assets/image/gelarry/3.jpeg'
import i4 from './../../../assets/image/gelarry/4.jpeg'
import i5 from './../../../assets/image/gelarry/5.jpeg'
import i6 from './../../../assets/image/gelarry/6.jpeg'
import i7 from './../../../assets/image/gelarry/7.jpeg'
import i8 from './../../../assets/image/gelarry/8.jpeg'
import i9 from './../../../assets/image/gelarry/9.jpeg'
import i10 from './../../../assets/image/gelarry/10.jpeg'
import i11 from './../../../assets/image/gelarry/11.jpeg'
import i12 from './../../../assets/image/gelarry/12.jpeg'
import i13 from './../../../assets/image/gelarry/13.jpeg'
import i14 from './../../../assets/image/gelarry/14.jpeg'
import i15 from './../../../assets/image/gelarry/15.jpeg'
import i16 from './../../../assets/image/gelarry/16.jpeg'
import i17 from './../../../assets/image/gelarry/17.jpeg'
import i18 from './../../../assets/image/gelarry/18.jpeg'
import i19 from './../../../assets/image/gelarry/19.jpeg'
import i20 from './../../../assets/image/gelarry/20.jpeg'
const Gellary = () => {
    return (
        <div className="w-full mt-10 md:p-7">
           <h2 className="link text-4xl font-bold text-blue-400 text-center font-prata mb-6 md:text-5xl ">Art&CRAFT GALLERY</h2>
             <Swiper watchSlidesProgress={true} slidesPerView={3}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  className="mySwiper">
        <SwiperSlide><img className="w-full h-72" src={i1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i7} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i8} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i9} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i10} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i11} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i12} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i13} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i14} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i15} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i16} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i17} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i18} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i19} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-72" src={i20} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Gellary;