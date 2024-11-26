import { manrope } from "@/utils/font";
import Image from "next/image";
import React, { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <p className={`${manrope.className} font-bold text-[16px] mb-5`}>Quantity</p>
      <div className="w-[132px] h-[48px] bg-[#ECE9FE] py-[8px] px-[16px] flex justify-between items-center rounded-[24px]">
        <div
          className="minus w-[10.67px] border-[1.5px] border-black hover:cursor-pointer"
          onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
        ></div>
        <div className={`${manrope.className} text-[16px] font-semibold`}>
          {quantity}
        </div>
        <div
          className="w-[16px] h-[16px] relative hover:cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Image src="/images/add.png" objectFit="cover" layout="fill" />
        </div>
      </div>
    </div>
  );
}
