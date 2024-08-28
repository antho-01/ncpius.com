import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

gitimport 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide> 
          <div className='swiperSlideImageContainer1'>
              
          </div>
        </SwiperSlide>
        // slider 1

        <SwiperSlide> 
          <div className='swiperSlideImageContainer2'>
            
          </div>
        </SwiperSlide>
        // slider 2

        <SwiperSlide> 
          <div className='swiperSlideImageContainer3'>
            
          </div>
        </SwiperSlide>
        // slider 3      


        <SwiperSlide> 
          <div className='swiperSlideImageContainer4'>
            
          </div>
        </SwiperSlide>
        // slider 4


        <SwiperSlide> 
          <div className='swiperSlideImageContainer5'>
            
          </div>
        </SwiperSlide>
        // slider 5

        <SwiperSlide> 
          <div className='swiperSlideImageContainer6'>
            
          </div>
        </SwiperSlide>
        // slider 6

        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
