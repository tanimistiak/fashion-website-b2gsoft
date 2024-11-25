import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { useRef, useState } from "react";
import Image from "next/image";
import { manrope } from "@/utils/font";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";

import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Link from "next/link";
export default function ProductSlider({ data }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-[90%] mx-auto mt-14">
      {/* heading and controls */}
      <div className="flex justify-between items-center mb-10">
        <div className="texts">
          <h1
            className={`text-[#7E53D4] ${manrope.className} text-[19px] font-normal`}
          >
            FEATURED PRODUCT
          </h1>
          <h4 className={`text-[28px] ${manrope.className} font-bold`}>
            New Arrivals
          </h4>
        </div>
        {/* controls */}
        <div>
          <SwiperNavigation swiper={swiperInstance} />
        </div>
      </div>
      <Swiper
        spaceBetween={24} // Space between slides
        slidesPerView={"auto"}
        onSwiper={setSwiperInstance}
        breakpoints={{
          1333: {
            slidesPerView: 4, // 4 slides for screens 1024px and above
            // spaceBetween: 24,
          },
          958: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2, // 3 slides for screens 768px and above
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
        style={{ background: "#FFFFFF" }}
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item?.id}
            style={{
              display: "flex",
              justifyContent: "none",
              background: "#FFFFFF",
            }}
            className="hover:cursor-pointer bg-[#F4F8FF]"
          >
            <Link href={`product/${item?.id}`}>
              <div className="w-[286px] h-[400px] mt-[10px] ml-[10px]">
                {/* image */}
                <div className="image w-[286px] h-[287px] overflow-hidden relative bg-[#F6F5FD] rounded-[8px]">
                  <Image src={item?.image} objectFit="cover" layout="fill" />
                </div>
                {/* name price */}
                <div className="name-price flex justify-between items-center my-[16px]">
                  <div
                    className={`${manrope.className} text-[16px] font-normal`}
                  >
                    {item?.name}
                  </div>
                  <div
                    className={`${manrope.className} text-[19px] font-semibold`}
                  >
                    BDT {item?.price}
                  </div>
                </div>
                {/* cart */}
                <AddToCartButton />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
}
