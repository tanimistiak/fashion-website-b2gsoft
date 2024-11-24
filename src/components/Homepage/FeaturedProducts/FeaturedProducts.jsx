"use client";
import { useFetchData } from "@/hooks/useFetchData";
import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import { manrope } from "@/utils/font";

export default function FeaturedProducts() {
  const { data, loading, error } = useFetchData("/data.json");
  console.log(data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <ProductSlider data={data} />
      <div className="flex justify-center">
        <div
          className={`see-more-button mt-7 bg-[#7E53D4] w-[120px] h-[40px] flex justify-center items-center rounded-[8px] ${manrope.className} text-[16px] font-semibold text-[#F4F8FF] hover:bg-[#6F42C1] transition-all duration-500`}
        >
          See more
        </div>
      </div>
    </div>
  );
}
