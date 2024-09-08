import person1 from './../../../assets/image/person/person1.jpg'
import person2 from './../../../assets/image/person/person2.jpg'
import person3 from './../../../assets/image/person/person3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './review.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Review;