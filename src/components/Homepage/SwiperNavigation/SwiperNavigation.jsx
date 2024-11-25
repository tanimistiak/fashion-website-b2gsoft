import React from "react";
import styles from "./ProductSlider.module.css";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
export default function SwiperNavigation({ swiper }) {
  return (
    <div className="navigation-btns flex gap-[8px]">
      <ArrowLeft swiper={swiper} />
      <ArrowRight swiper={swiper} />
    </div>
  );
}
