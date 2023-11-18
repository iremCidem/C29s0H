'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import advertisingPhoto from '@/images/Banner.png';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';

const MySwiper = () => {
  return (
    <div className='container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper h-[400px]'
      >
        <SwiperSlide>
          <Image src={advertisingPhoto} alt='advertisement' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='advertisement' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='advertisement' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' width='100%' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
