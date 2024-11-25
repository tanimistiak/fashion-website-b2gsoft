"use client";
import { useFetchData } from "@/hooks/useFetchData";
import React from "react";
import ShopNowButton from "../ShopNowButton/ShopNowButton";
import { manrope } from "@/utils/font";

export default function CollectionForMobile() {
  const images = ["/images/s2.png", "/images/s3.png"];
  const text = ["MEN COLLECTION", "WOMEN COLLECTION"];
  const collection = [
    {
      image: "/images/s3.png",
      text: "MEN COLLECTION",
      height: 356.33,
      width: 278.26,
    },
    {
      image: "/images/s2.png",
      text: "WOMEN COLLECTION",
      width: 215.51,
      height: 358.34,
    },
  ];
  return (
    <section>
      {collection?.map((item, index) => (
        <div className="flex justify-center mb-20">
          <div>
            <div
              className={`image w-[326.74px] h-[302.82px] bg-[#EEECFB] relative flex justify-center`}
            >
              <img
                src={item?.image}
                alt=""
                height={item?.height}
                width={item?.width}
                className={`absolute bottom-0`}
              />
            </div>
            <div className="text">
              <p className={`${manrope.className} text-[23px] font-semibold`}>
                {item?.text}
              </p>
              <div className="flex">
                <ShopNowButton />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
