"use client";
import { useFetchData } from "@/hooks/useFetchData";
import { manrope } from "@/utils/font";
import React from "react";
import SwiperNavigation from "../SwiperNavigation/SwiperNavigation";
import SingleProduct from "./SingleProduct";

export default function BigDeal() {
  const { data } = useFetchData("/bigDealData.json");
  return (
    <section className="w-[90%] mx-auto">
      <div className="header justify-between flex items-center">
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
          <SwiperNavigation />
        </div>
      </div>
      <div className="products">
        {data?.map((item) => (
          <SingleProduct item={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
}
