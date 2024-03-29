// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
  const BannerList = [
    {
      src: '/images/ModoBanner1.jpeg',
    },
    {
      src: '/images/ModoBanner2.jpeg',
    },
    {
      src: '/images/ModoBanner3.jpeg',
    },
    {
      src: '/images/ModoBanner4.jpeg',
    },
  ];
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        // install Swiper modules
        className="drop-shadow-lg"
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {BannerList.map((item, idx) => (
          <SwiperSlide key={idx}>
            <a href="https://www.apple.com/kr/app-store/">
              <img className="cursor-pointer" src={item.src} alt={item.src}></img>
            </a>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img className="cursor-pointer" src="/images/ModoEventBanner.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72 " src="/images/kreamImg.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72 " src="/images/whiteModo.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72 " src="/images/pinkModo.png"></img>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
