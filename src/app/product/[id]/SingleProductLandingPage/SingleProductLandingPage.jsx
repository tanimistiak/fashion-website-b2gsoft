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

export default function SingleProductLandingPage() {
  const { id } = useParams();
  const { data } = useFetchData("/data.json");
  const [product, setProduct] = useState();
  useEffect(() => {
    const foundProduct = data?.find((item) => item.id == id);
    setProduct(foundProduct);
  }, [data, id]);

  return (
    <div className="w-[90%] mx-auto">
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
  );
}
