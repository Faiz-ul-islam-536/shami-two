import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import image1 from "../../public/images/slider (1).jpg";
import image2 from "../../public/images/slider (2).png";
import image3 from "../../public/images/slider (3).png";
import image4 from "../../public/images/slider (4).png";
import image5 from "../../public/images/slider (5).png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
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
        // className="mySwiper"
      >
        <SwiperSlide>
          <Image alt="slider image" objectFit="contain" src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider image" objectFit="contain" src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider image" objectFit="contain" src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider image" objectFit="contain" src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider image" objectFit="contain" src={image5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
