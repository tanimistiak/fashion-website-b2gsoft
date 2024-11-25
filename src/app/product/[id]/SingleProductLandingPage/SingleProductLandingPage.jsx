"use client";
import { useParams } from "next/navigation";
import React from "react";
import Gallery from "./Gallery/Gallery";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function SingleProductLandingPage() {
  const { id } = useParams();

  return (
    <>
      <div className="first-section w-[90%] mx-auto flex gap-5">
        <div className="w-[45%] gallery-slider">
          <Gallery />
        </div>
        <div className="w-[45%]">
          <ProductDetails />
        </div>
      </div>
    </>
  );
}
