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
        className="mySwiper w-[90%] mx-auto collection-slider h-[700px]"
        pagination={true}
      >
        {/* First slide */}
        <SwiperSlide className="">
          <div className="flex items-center w-full gap-5 h-[90%]">
            <div className="h-[481px] bg-[#EEECFB] w-[50%]  flex justify-center relative">
              <img
                src="/images/s3.png"
                height={566}
                width={468}
                className="absolute bottom-0"
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
          <div className="flex items-center w-full gap-5 h-[90%] flex-row-reverse">
            <div className="h-[481px] bg-[#EEECFB] w-[50%]  flex justify-center relative">
              <img
                src="/images/s2.png"
                height={567}
                width={341}
                className="absolute bottom-0"
              />
            </div>
            {/* Text-box */}
            <div className={`sm:w-[50%] flex justify-end`}>
              <div>
                <p className={`${manrope.className} text-[48px] font-semibold`}>
                  WOMEN COLLECTION
                </p>
                <div className="flex justify-start">
                  <ShopNowButton />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Third slide */}
        <SwiperSlide>
          <div className="flex items-center w-full gap-5 h-[90%]">
            <div className="h-[481px] bg-[#EEECFB] w-[50%]  flex justify-center relative">
              <img
                src="/images/s1.png"
                height={606}
                width={405}
                className="absolute bottom-0"
              />
            </div>
            {/* Text-box */}
            <div className={`sm:w-[50%]`}>
              <p className={`${manrope.className} text-[48px] font-semibold`}>
                KID COLLECTION
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
