import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";
import React from "react";
import styles from "./ProductSlider.module.css";
export default function ArrowRight({ swiper }) {
  return (
    <div>
      <div
        className={`w-[32px] h-[32px] rounded-[16px] border flex justify-center items-center border-[#7E53D4] drop-shadow hover:bg-[#7E53D4] transition-all duration-[0.3s] ${styles.sliderIconParent}`}
        onClick={() => swiper?.slideNext()}
      >
        <ArrowRight02Icon
          size={24}
          className={`text-[#7E53D4] ${styles.sliderIcon}`}
        />
      </div>
    </div>
  );
}
