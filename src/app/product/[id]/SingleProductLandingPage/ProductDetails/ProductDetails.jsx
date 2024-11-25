import { manrope } from "@/utils/font";
import Image from "next/image";
import React from "react";
import Dashedborder from "./Dashedborder";
import AvailableSize from "./AvailableSize";

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
              <div
                key={item}
                className="star w-[20px] h-[20px] relative flex items-center"
              >
                <Image
                  key={item}
                  src="/images/starf.png"
                  objectFit="contain"
                  layout="fill"
                  alt="rating"
                />
              </div>
            ))}
            <div className="star w-[20px] h-[20px] relative">
              <Image
                src="/images/starg.png"
                width={19}
                height={19}
                alt="rating"
              />
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
      <Dashedborder />

      <div>
        <AvailableSize />
      </div>
    </div>
  );
}
