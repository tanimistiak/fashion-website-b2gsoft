"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { manrope } from "@/utils/font";
import ShopNowButton from "../ShopNowButton/ShopNowButton";
import "./CollectionSlide.css";
export default function CollectionSlider() {
  const slides = [1, 2, 3];
  return (
    <div className="w-full mx-auto">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper w-[90%] mx-auto collection-slider sm:h-[614px] overflow-visible"
        pagination={true}
      >
        {/* First slide */}
        <SwiperSlide>
          <div className="flex items-center w-full gap-5">
            <div className="sm:h-[481px] bg-[#EEECFB] sm:w-[50%] overflow-visible relative">
              <img
                src="/images/s3.png"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[566px] w-[468px]"
              />
            </div>
            {/* Text-box */}
            <div className={`sm:w-[50%]`}>
              <p className={`${manrope.className} text-[48px] font-semibold`}>
                MEN COLLECTION
              </p>
              <div className="flex justify-start">
                <ShopNowButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Second slide */}
        <SwiperSlide>
          <div className="flex items-center w-full gap-5">
            <div className="sm:h-[481px] bg-[#EEECFB] sm:w-[50%] overflow-visible relative">
              <img
                src="/images/s2.png"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[566px] w-[468px]"
              />
            </div>
            {/* Text-box */}
            <div className={`sm:w-[50%]`}>
              <p className={`${manrope.className} text-[48px] font-semibold`}>
                MEN COLLECTION
              </p>
              <div className="flex justify-start">
                <ShopNowButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Third slide */}
        <SwiperSlide>
          <div className="flex items-center w-full gap-5">
            <div className="sm:h-[481px] bg-[#EEECFB] sm:w-[50%] overflow-visible relative">
              <img
                src="/images/s1.png"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[566px] w-[468px]"
              />
            </div>
            {/* Text-box */}
            <div className={`sm:w-[50%]`}>
              <p className={`${manrope.className} text-[48px] font-semibold`}>
                MEN COLLECTION
              </p>
              <div className="flex justify-start">
                <ShopNowButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
