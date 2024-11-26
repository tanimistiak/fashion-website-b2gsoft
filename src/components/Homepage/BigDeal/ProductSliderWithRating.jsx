import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { useRef, useState } from "react";
import Image from "next/image";
import { manrope, nunito } from "@/utils/font";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";

import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
export default function ProductSliderWithRating({
  data,
  setSwiperInstance,
  swiperInstance,
}) {
  const rating = [1, 2, 3];
  const noRating = [1, 2];
  return (
    <div className=" mx-auto mt-14">
      <Swiper
        spaceBetween={24} // Space between slides
        slidesPerView={"auto"}
        onSwiper={setSwiperInstance}
        breakpoints={{
          1024: {
            slidesPerView: 4, // 4 slides for screens 1024px and above
            // spaceBetween: 24,
          },
          768: {
            slidesPerView: 3, // 3 slides for screens 768px and above
          },
          480: {
            slidesPerView: 1, // 1 slides for screens 480px and above
          },
          350: {
            slidesPerView: 1, // 1 slides for screen 350px and above
            // spaceBetween: 50,
            spaceBetween: -20,
          },
        }}
        // loop={true} // Enable looping of slides
        pagination={{ clickable: true }} // Enable pagination dots
        // width={1500}
        // centeredSlides={true}
        centeredSlidesBounds={true}
        // slidesPerView={"auto"}
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item?.id}
            style={{
              display: "flex",
              justifyContent: "none",
            }}
            className="hover:cursor-pointer"
          >
            <div className="w-[286px] h-[400px]">
              {/* image */}
              <div className="image w-[286px] h-[287px] overflow-hidden relative bg-[#F6F5FD] rounded-[8px]">
                <Image src={item?.image} objectFit="contain" layout="fill" />
              </div>
              {/* rating */}
              <div className="rating flex items-center gap-[4px]">
                {rating?.map((rate, index) => (
                  <Image
                    key={index}
                    src="/images/starf.png"
                    width={13.13}
                    height={13.13}
                    alt="rating"
                  />
                ))}
                {noRating?.map((rate, index) => (
                  <Image
                    key={index}
                    src="/images/star.png"
                    width={13.13}
                    height={13.13}
                    alt="rating"
                  />
                ))}
                <span className={`${nunito.className}`}>(50)</span>
              </div>
              {/* name price */}
              <div className="name-price flex justify-between items-center my-[5px]">
                <div className={`${manrope.className} text-[16px] font-normal`}>
                  {item?.name}
                </div>
                <div
                  className={`${manrope.className} text-[19px] font-semibold`}
                >
                  BDT {item?.price}
                </div>
              </div>
              {/* cart */}
              <AddToCartButton item={item} />
            </div>
          </SwiperSlide>
        ))}
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
}
