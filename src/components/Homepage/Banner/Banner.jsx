import React from "react";
import Image from "next/image";
import arrow from "../assets/banner/arrow up.png";
// import { Manrope } from "next/font/google";
import Motive from "./Motive";
import { manrope } from "@/utils/font";
import ShopNowButton from "../ShopNowButton/ShopNowButton";

export default function Banner() {
  return (
    <section className="m-0">
      <div className="h-[350px] sm:h-[70vh] w-[100%] bg-hero bg-cover bg-no-repeat flex justify-center items-center bg-center">
        {/* hero text */}
        <div className="text text-center">
          <h1
            className={`text-[23px] sm:text-[48px] text-white ${manrope.className} font-bold`}
          >
            Elevate Your Everyday Style
          </h1>
          <p
            className={`text-[13px] sm:text-[19px] text-[#F5F3FF] ${manrope.className} font-normal`}
          >
            Discover the Latest Trends in Sustainable Fashion
          </p>
          <ShopNowButton />
        </div>
      </div>
      <Motive />
    </section>
  );
}
