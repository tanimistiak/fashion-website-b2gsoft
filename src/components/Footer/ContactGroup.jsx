import { manrope } from "@/utils/font";
import Image from "next/image";
import React from "react";

export default function ContactGroup() {
  return (
    <div
      className={`${manrope.className} flex justify-between my-5 md:gap-[100px] sm:flex-row flex-col gap-5`}
    >
      <div className="contact-us">
        <h1 className="font-bold text-white sm:mb-5 mb-2">Contact Us</h1>
        <a href="mailto:support@we5ive.com" className="text-white">
          support@we5ive.com
        </a>
      </div>
      <div className="about">
        <h2 className="text-white sm:mb-3 mb-1">About Us</h2>
        <h2 className="text-white">Contact Us</h2>
      </div>
      <div className="contact-us">
        <h1 className=" text-white sm:mb-3 mb-1">Privacy Policy</h1>
        <h1 className=" text-white mb-3">Terms & Condition</h1>
      </div>
      <div className="contact-us">
        <h1 className=" text-white mb-5">Social Link</h1>
        <div className="icons flex gap-[24px]">
          <div className="fb w-[24px] h-[24px] relative">
            <Image src="/images/fb.png" layout="fill" objectFit="cover" />
          </div>
          <div className="fb w-[24px] h-[24px] relative">
            <Image src="/images/x.png" layout="fill" objectFit="cover" />
          </div>
          <div className="fb w-[24px] h-[24px] relative">
            <Image src="/images/ln.png" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
