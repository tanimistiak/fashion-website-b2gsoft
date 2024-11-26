import { manrope } from "@/utils/font";
import { ArrowDown01Icon, StarIcon, ThumbsUpIcon } from "hugeicons-react";
import Image from "next/image";
import React, { useState } from "react";
import Dashedborder from "../ProductDetails/Dashedborder";
import ReviewProgress from "./ReviewProgress";

export default function ReviewRating() {
  const tabs = ["Details", "Review & Rating", "Discussion"];
  const starFill = [1, 2, 3, 4];
  const [selected, setSelected] = useState("Review & Rating");
  const reviews = [
    {
      name: "Cameron Williamson",
      comment: "Very Nice!!",
      image: "/images/cameron.png",
    },
    {
      name: "Cameron Williamson",
      comment: "Very Nice!!",
      image: "/images/cameron.png",
    },
  ];
  return (
    <div>
      <div className="tab flex gap-5 sm:gap-20">
        {tabs?.map((tab) => (
          <div
            onClick={() => setSelected(tab)}
            className={`${manrope.className} text-[19px] font-semibold ${
              selected === tab
                ? "text-[#7E53D4]"
                : "text-[#747474] hover:cursor-pointer"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {selected === "Review & Rating" && (
        <div className="py-14 flex gap-5 sm:flex-row flex-col flex-col-reverse">
          <div className="w-[100%] sm:w-[65%]">
            {/* reviews */}
            <div className="reviews w-[121px] h-[40px] border-[#7E53D4] border-[1px] flex justify-center items-center rounded-[8px]">
              <div
                className={`${manrope.className} text-[16px] font-semibold flex gap-2 items-center`}
              >
                <p>Newest</p>
                <ArrowDown01Icon size={24} />
              </div>
            </div>
            {/* cameron */}
            <div>
              {reviews.map((review, index) => (
                <div>
                  <div className="flex gap-2 my-5">
                    <div>
                      <img src={review?.image} alt="" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className={`${manrope.className} font-semibold`}>
                        {review?.name}
                        <div className="star">
                          <div className="flex gap-5">
                            {/* stars */}
                            <div className="flex items-start gap-1">
                              {starFill?.map((item) => (
                                <div
                                  key={item}
                                  className="star flex items-center"
                                >
                                  <StarIcon
                                    // type="standard"
                                    color="#FFCF11"
                                    fill="#FFCF11"
                                    size={20}
                                  />
                                </div>
                              ))}
                              <div className="star ">
                                <StarIcon
                                  // type="standard"
                                  color="#DFDFDF"
                                  fill="#DFDFDF"
                                  size={20}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                      <div>
                        <p
                          className={`${manrope.className} text-[13px] text-[#656565]`}
                        >
                          3 days
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* comment */}
                  <p className={`${manrope.className} font-bold my-3`}>
                    {review?.comment}
                  </p>
                  {/* thumbs likes */}
                  <div className="flex gap-1">
                    <ThumbsUpIcon size={16} />
                    <p className={`${manrope.className} text-[13px]`}>10</p>
                  </div>
                  {/* dashed border */}
                  {index < reviews.length - 1 && (
                    <div className="mt-5">
                      <Dashedborder />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[100%] sm:w-[35%]">
            <ReviewProgress />
          </div>
        </div>
      )}
    </div>
  );
}
