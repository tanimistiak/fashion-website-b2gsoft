import { manrope, nunito } from "@/utils/font";
import Image from "next/image";
import React from "react";
import ContactGroup from "./ContactGroup";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] w-[100%] sm:h-[491px]">
      {/* before copyright */}
      <section className="w-[90%] mx-auto flex flex-col justify-center h-[90%] py-5">
        <div className="logo-newsletter flex w-[100%] justify-between sm:flex-col flex-col md:flex-col lg:flex-row">
          {/* logo text */}
          <div className="logo-text w-[100%] lg:w-[30%]">
            <div className="logo lg:w-[197px] lg:h-[49px] w-[96.29px] h-[24px] md:w-[96.29px] md:h-[24px] relative sm:my-0 my-5">
              <Image src="/images/logof.png" objectFit="cover" layout="fill" />
            </div>
            <div className="text">
              <p
                className={`${manrope.className} text-[16px] font-normal text-white  sm:my-0 my-5`}
              >
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.{" "}
              </p>
            </div>
          </div>
          <div className="news-letter">
            <p
              className={`${manrope.className} text-[23px] font-bold text-white`}
            >
              Sign Up For Our Newsletter!
            </p>
            <p
              className={`${manrope.className} text-[16px] font-normal text-white mt-2`}
            >
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className={`button my-5 ${manrope.className}`}>
              <input
                type="text"
                name=""
                id=""
                className={`lg:w-[435px] w-[220px] sm:h-[53px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] p-[16px] placeholder:text-[16px] placeholder:text-[#1D1D1D]`}
                placeholder="Your email address"
              />
              <button
                className={`w-[101px] sm:w-[193px] h-[40px] sm:h-[53px] bg-[#7E53D4] rounded-tr-[8px] rounded-br-[8px]  text-[16px] text-white`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* contacts */}
        <ContactGroup />
      </section>
      <div
        className={`copyright h-[58px] sm:h-[10%] bg-[#7E53D4] flex justify-center items-center ${nunito.className} text-white`}
      >
        © 2024 | We5ive
      </div>
    </footer>
  );
}
