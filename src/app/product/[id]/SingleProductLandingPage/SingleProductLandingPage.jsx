"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery/Gallery";
import ProductDetails from "./ProductDetails/ProductDetails";
import { useFetchData } from "@/hooks/useFetchData";
import ReviewRating from "./ReviewRating/ReviewRating";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts/FeaturedProducts";
import ProductSlider from "@/components/Homepage/FeaturedProducts/ProductSlider";
import SeeMoreButton from "@/components/Homepage/SeeMoreButton/SeeMoreButton";
import { ShoppingBasket01Icon } from "hugeicons-react";
import { manrope } from "@/utils/font";

export default function SingleProductLandingPage() {
  const { id } = useParams();
  const { data } = useFetchData("/data.json");
  const [product, setProduct] = useState();
  useEffect(() => {
    const foundProduct = data?.find((item) => item.id == id);
    setProduct(foundProduct);
  }, [data, id]);

  return (
    <div className="relative">
      <div className="w-[90%] mx-auto ">
        <div className="first-section flex gap-5 py-5 lg:flex-row sm:flex-col flex-col">
          <div className="w-[100%] lg:w-[50%] gallery-slider">
            <Gallery />
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <ProductDetails item={product} />
          </div>
        </div>
        <ReviewRating />
        <ProductSlider data={data} featured={false} related={true} />
        <div className="flex justify-center pb-10">
          <SeeMoreButton />
        </div>
      </div>
      <div
        className={`w-[100px] h-[100px] bg-[#581FC1] fixed top-[50%] right-[-80px] rounded-tl-[16px] rounded-bl-[16px] hover:right-[0px] transition-all duration-500 shadow-2xl ${manrope.className} text-[#F4F8FF] flex flex-col justify-center items-center`}
      >
        <ShoppingBasket01Icon size={32} color="#F6F5FD" />
        <p>Your bag</p>
        <p>0</p>
      </div>
    </div>
  );
}
