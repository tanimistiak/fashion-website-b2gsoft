"use client";
import { useFetchData } from "@/hooks/useFetchData";
import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import { manrope } from "@/utils/font";
import SeeMoreButton from "../SeeMoreButton/SeeMoreButton";

export default function FeaturedProducts() {
  const { data, loading, error } = useFetchData("/data.json");

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="w-[90%] mx-auto">
        <ProductSlider data={data} featured={true} related={false} />
      </div>
      <div className="flex justify-center">
        <SeeMoreButton />
      </div>
    </div>
  );
}
