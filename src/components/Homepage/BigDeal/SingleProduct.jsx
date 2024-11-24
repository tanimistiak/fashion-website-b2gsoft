import { manrope, nunito } from "@/utils/font";
import Image from "next/image";
import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function SingleProduct({ item }) {
  const rating = [1, 2, 3];
  const noRating = [1, 2];
  return (
    <div className="h-[410px] w-[302px] rounded-[16px] bg-white flex flex-col gap-[16px] justify-center p-2">
      <div className="flex justify-center items-center w-[100%]">
        <div className="image-block w-[286px] h-[252px] relative overflow-hidden bg-[#F6F5FD] rounded-[8px]">
          <div
            className={`${manrope.className} discount w-[45px] h-[62px] bg-[#7E53D4] text-[13px] text-white font-bold absolute right-5 rounded-br-[22px] rounded-bl-[22px] text-center`}
          >
            Up <br />
            to <br /> 40%
          </div>
          <Image
            src={item?.image}
            objectFit="contain"
            layout="fill"
            // className="absolute bottom-0"
          />
        </div>
      </div>
      <div className="rating flex items-center gap-[4px]">
        {rating?.map((rate, index) => (
          <Image
            key={index}
            src="/images/starf.png"
            width={13.13}
            height={13.13}
            alt=""
          />
        ))}
        {noRating?.map((rate, index) => (
          <Image
            key={index}
            src="/images/star.png"
            width={13.13}
            height={13.13}
            alt=""
          />
        ))}
        <span className={`${nunito.className}`}>(50)</span>
      </div>
      {/* name and price */}
      <div className="name-price flex justify-between items-center">
        <div className={`${manrope.className} text-[16px] font-normal`}>
          {item?.name}
        </div>
        <div className={`${manrope.className} text-[19px] font-semibold`}>
          BDT {item?.price}
        </div>
      </div>
      <div className="cart-button">
        <AddToCartButton />
      </div>
    </div>
  );
}
