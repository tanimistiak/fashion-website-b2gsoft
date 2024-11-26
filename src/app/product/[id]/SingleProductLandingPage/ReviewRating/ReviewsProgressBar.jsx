import { manrope } from "@/utils/font";
import React from "react";

export default function ReviewsProgressBar({ bar }) {
  console.log(bar);
  const { valueOne, valueTwo, width, progress } = bar;
  return (
    <div className="my-2 flex items-center gap-2">
      <div className={`${manrope.className} text-[19px]`}>{valueOne}</div>
      <div
        style={{ width: `${width}%` }}
        className={`flex h-[10px] rounded-full overflow-hidden bg-[#DFDFDF]`}
      >
        <div
          style={{ width: `${progress}%` }}
          className="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 bg-[#FFCF11]"
        ></div>
      </div>
      <div className={`${manrope.className} text-[19px]`}>{valueTwo}</div>
    </div>
  );
}
