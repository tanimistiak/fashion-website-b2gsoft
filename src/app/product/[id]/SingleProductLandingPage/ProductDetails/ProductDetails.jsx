import { manrope } from "@/utils/font";
import Image from "next/image";
import React from "react";
import Dashedborder from "./Dashedborder";
import AvailableSize from "./AvailableSize";
import AvailableColor from "./AvailableColor";
import Quantity from "./Quantity";
import AddToCartButton from "@/components/Homepage/AddToCartButton/AddToCartButton";
import BuyNowButton from "./AddToCartButton";
import { StarIcon } from "hugeicons-react";

export default function ProductDetails({ item }) {
  const starFill = [1, 2, 3, 4];
  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* button */}
        <div
          className={`button w-[193px] h-[40px] bg-[#2F1C59] flex justify-center items-center ${manrope.className} font-semibold text-[#F4F8FF] text-[16px] rounded-[8px]`}
        >
          <button>New Arrival</button>
        </div>
        {/* name */}
        <div>
          <p
            className={`${manrope.className} text-[33px] font-semibold text-[#1D1D1D]`}
          >
            {item?.name}
          </p>
        </div>
        {/* rating */}
        <div className="flex gap-5">
          {/* stars */}
          <div className="flex items-center gap-1">
            {starFill?.map((item) => (
              <div key={item} className="star flex">
                <StarIcon size={20} fill="#FFCF11" color="#FFCF11" />
              </div>
            ))}
            <div className="star">
              <StarIcon size={20} fill="#DFDFDF" color="#DFDFDF" />
            </div>
          </div>
          {/* review text */}
          <div
            className={`reviews text-[16px] ${manrope.className} font-semibold text-[#7E53D4]`}
          >
            121 reviews
          </div>
        </div>
        {/* price */}
        <div>
          <h4 className={`${manrope.className} text-[28px] font-bold`}>
            BDT {item?.price}
          </h4>
        </div>
      </div>

      {/* dashed border */}
      <div className="my-10">
        <Dashedborder />
      </div>

      <div className="flex gap-[20px] xl:gap-56 items-center">
        <AvailableSize />
        <AvailableColor />
      </div>
      <div className="my-11">
        <Dashedborder />
      </div>
      <div>
        <Quantity />
      </div>
      {/* button */}
      <div className="flex gap-5 my-5 sm:flex-row flex-col">
        <BuyNowButton />
        <AddToCartButton />
      </div>
    </div>
  );
}
