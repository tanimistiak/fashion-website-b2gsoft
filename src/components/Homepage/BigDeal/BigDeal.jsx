"use client";
import { useFetchData } from "@/hooks/useFetchData";
import { manrope } from "@/utils/font";
import React, { useState } from "react";
import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";
import SingleProduct from "./SingleProduct";
import SeeMoreButton from "../SeeMoreButton/SeeMoreButton";
import ProductSliderWithRating from "./ProductSliderWithRating";

export default function BigDeal() {
  const { data } = useFetchData("/bigDealData.json");
  const [swiperInstance, setSwiperInstance] = useState(null);
  // console.log(data);
  console.log(data);
  return (
    <section className="w-[90%] mx-auto ">
      <div className="header justify-between flex items-center mb-5">
        <div className="text">
          <p
            className={`${manrope.className} text-[19px] font-normal text-[#7E53D4]`}
          >
            SUMMER
          </p>
          <h1
            className={`${manrope.className} text-[28px] font-bold text-[#1D1D1D]`}
          >
            Big Deal
          </h1>
        </div>
        <div className="button">
          <SwiperNavigation swiper={swiperInstance} />
        </div>
      </div>
      {/* products */}
      <div className="products hidden sm:flex flex-col gap-[24px]">
        <div className="products sm:grid sm:grid-cols-4 gap-[24px]">
          {data?.map((item) => (
            <SingleProduct item={item} key={item?.id} />
          ))}
        </div>
        <div className="products sm:grid sm:grid-cols-4 gap-[24px]">
          {data?.map((item) => (
            <SingleProduct item={item} key={item?.id} />
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <ProductSliderWithRating
          data={data}
          swiperInstance={swiperInstance}
          setSwiperInstance={setSwiperInstance}
        />
      </div>
      <div className="see-more flex justify-center">
        <SeeMoreButton />
      </div>
    </section>
  );
}
