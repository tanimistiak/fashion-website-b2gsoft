import { manrope } from "@/utils/font";
import React from "react";

export default function SeeMoreButton() {
  return (
    <div
      className={`see-more-button mt-7 bg-[#7E53D4] w-[120px] h-[40px] flex justify-center items-center rounded-[8px] ${manrope.className} text-[16px] font-semibold text-[#F4F8FF] hover:bg-[#6F42C1] transition-all duration-500`}
    >
      See more
    </div>
  );
}
