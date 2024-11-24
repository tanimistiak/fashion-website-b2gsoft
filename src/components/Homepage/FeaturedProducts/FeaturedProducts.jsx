"use client";
import { useFetchData } from "@/hooks/useFetchData";
import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";
import { manrope } from "@/utils/font";
import SeeMoreButton from "../SeeMoreButton/SeeMoreButton";

export default function FeaturedProducts() {
  const { data, loading, error } = useFetchData("/data.json");
  console.log(data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      <ProductSlider data={data} />
      <div className="flex justify-center">
        <SeeMoreButton />
      </div>
    </div>
  );
}
