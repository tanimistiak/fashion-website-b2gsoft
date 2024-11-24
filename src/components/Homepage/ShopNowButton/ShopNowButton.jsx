import { manrope } from "@/utils/font";
import Image from "next/image";
import React from "react";
import arrow from "../assets/banner/arrow up.png";
import styles from "./ShopNowButton.module.css";
export default function ShopNowButton() {
  return (
    <div className="flex justify-center">
      <div
        className={`button-group flex justify-center items-center mt-[24px] ${styles.group} max-w-fit`}
      >
        <button
          className={`w-[149px] h-[48px] bg-[#8F71E1] rounded-[28px] ${manrope.className} text-white font-normal transition-all duration-500 ${styles.btn}`}
        >
          Shop Now
        </button>
        <div
          className={`arrow w-[48px] h-[48px] bg-[#8F71E1] rounded-[24px] flex justify-center items-center ${styles.rotate}`}
        >
          <Image src={arrow} width={24} height={24} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
