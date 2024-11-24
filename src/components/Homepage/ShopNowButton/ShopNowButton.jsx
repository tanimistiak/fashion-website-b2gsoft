import { manrope } from "@/utils/font";
import Image from "next/image";
import React from "react";
import arrow from "../assets/banner/arrow up.png";
export default function ShopNowButton() {
  return (
    <div className="button-group flex justify-center items-center mt-[24px]">
      <button
        className={`w-[149px] h-[48px] bg-[#8F71E1] rounded-[28px] ${manrope.className} text-white font-normal`}
      >
        Shop Now
      </button>
      <div className="arrow w-[48px] h-[48px] bg-[#8F71E1] rounded-[24px] flex justify-center items-center">
        <Image src={arrow} width={24} height={24} alt="arrow" />
      </div>
    </div>
  );
}
