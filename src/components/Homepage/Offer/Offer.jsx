import { manrope, pacifico } from "@/utils/font";
import React from "react";
import ShopNowButton from "../ShopNowButton/ShopNowButton";
import Image from "next/image";

export default function Offer() {
  return (
    <section className=" w-[100%] sm:w-[90%] mx-auto my-20 sm:h-[450px] bg-[#EEECFB] flex justify-center items-center gap-[75px] sm:flex-row flex-col">
      <div className="text-block sm:block flex flex-col items-center mt-10 sm:mt-0">
        <p
          className={`${pacifico.className} text-[#6F42C1] text-[24px] font-normal`}
        >
          Big Deal
        </p>
        <p
          className={`${manrope.className} text-[28px] sm:text-[48px] font-semibold w-[60%] sm:w-[100%] sm:text-start text-center`}
        >
          <span className="text-[#6F42C1]">30% </span>Off for New Customers
        </p>
        <div className="button flex">
          <ShopNowButton />
        </div>
      </div>
      <div className="image-block w-[427px] h-[450px] overflow-hidden relative">
        <Image
          src="/images/offer.png"
          objectFit="cover"
          layout="fill"
          alt="offer image"
        />
      </div>
    </section>
  );
}
