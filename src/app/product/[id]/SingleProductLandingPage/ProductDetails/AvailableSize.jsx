"use client";
import { manrope } from "@/utils/font";
import React, { useState } from "react";

export default function AvailableSize() {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("S");
  return (
    <section>
      <p
        className={`${manrope.className} text-[19px] text-[#1D1D1D] font-semibold`}
      >
        Available Size
      </p>
      {/* size */}
      <div className="flex gap-2 mt-5">
        {sizes?.map((size) => (
          <div
            key={size}
            className={`w-[40px] h-[40px] bg-[#F6F5FD] rounded-[8px] flex justify-center items-center hover:cursor-pointer ${
              selectedSize === size && "border-[#7E53D4] border-[1.5px]"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            <p className={`${manrope.className}`}>{size}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
