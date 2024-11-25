import { manrope } from "@/utils/font";
import React from "react";

export default function ProductDetails() {
  return (
    <div>
        {/* button */}
      <div
        className={`button w-[193px] h-[40px] bg-[#2F1C59] flex justify-center items-center ${manrope.className} font-semibold text-[#F4F8FF] text-[16px] rounded-[8px]`}
      >
        <button>New Arrival</button>
      </div>
    </div>
  );
}
