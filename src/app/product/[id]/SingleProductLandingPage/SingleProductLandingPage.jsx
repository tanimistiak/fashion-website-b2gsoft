"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery/Gallery";
import ProductDetails from "./ProductDetails/ProductDetails";
import { useFetchData } from "@/hooks/useFetchData";

export default function SingleProductLandingPage() {
  const { id } = useParams();
  const { data } = useFetchData("/data.json");
  const [product, setProduct] = useState();
  useEffect(() => {
    const foundProduct = data?.find((item) => item.id == id);
    setProduct(foundProduct);
  }, [data, id]);

  return (
    <>
      <div className="first-section w-[90%] mx-auto flex gap-5">
        <div className="w-[45%] gallery-slider">
          <Gallery />
        </div>
        <div className="w-[45%]">
          <ProductDetails item={product} />
        </div>
      </div>
    </>
  );
}
