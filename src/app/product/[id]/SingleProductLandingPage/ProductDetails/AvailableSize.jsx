import { manrope } from "@/utils/font";
import React from "react";

export default function AvailableSize() {
  const sizes = ["S", "M", "L", "XL"];
  return (
    <section>
      <p className={`${manrope.className} text-[19px]`}>Available Size</p>
      <div className="w-[40px] h-[40px]"></div>
    </section>
  );
}
