import { manrope } from "@/utils/font";
import { StarIcon } from "hugeicons-react";
import Image from "next/image";
import React from "react";
import Dashedborder from "../ProductDetails/Dashedborder";
import ReviewsProgressBar from "./ReviewsProgressBar";

const ReviewProgress = () => {
  const starFill = [1, 2, 3, 4];
  const reviewBar = [
    {
      valueOne: 5,
      valueTwo: 50,
      width: 93,
      progress: 50,
    },
    {
      valueOne: 4,
      valueTwo: 5,
      width: 95,
      progress: 10,
    },
    {
      valueOne: 3,
      valueTwo: 10,
      width: 93,
      progress: 30,
    },
    {
      valueOne: 2,
      valueTwo: 30,
      width: 92,
      progress: 40,
    },
    {
      valueOne: 1,
      valueTwo: 2,
      width: 95,
      progress: 5,
    },
  ];
  return (
    <div>
      {/* review */}
      <div className="flex gap-5 items-center sm:gap-20">
        <p className={`${manrope.className} font-semibold`}>Product Review</p>

        {/* review text */}
        <div
          className={`reviews text-[16px] ${manrope.className} font-semibold text-[#7E53D4]`}
        >
          121 reviews
        </div>
      </div>
      {/* average rating */}
      <div className="average my-5">
        <div className="flex justify-between items-baseline">
          {/* stars */}
          <div className="flex gap-1">
            {starFill?.map((item) => (
              <StarIcon
                // type="standard"
                color="#FFCF11"
                fill="#FFCF11"
                size={33.33}
              />
            ))}
            <StarIcon
              // type="standard"
              color="#DFDFDF"
              fill="#DFDFDF"
              size={33.33}
            />
          </div>
          {/* review text */}
          <div
            className={`reviews text-[19px] ${manrope.className} font-semibold`}
          >
            (4.0)
          </div>
        </div>
      </div>
      <Dashedborder />
      {/* progress */}
      <div className="my-5">
        {reviewBar?.map((bar) => (
          <ReviewsProgressBar bar={bar} />
        ))}
      </div>
    </div>
  );
};

export default ReviewProgress;
