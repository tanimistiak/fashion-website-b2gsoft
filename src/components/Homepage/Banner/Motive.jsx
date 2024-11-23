import React from "react";
import truck from "../assets/motive/truck.png";
import exchange from "../assets/motive/exchange.png";
import payment from "../assets/motive/payment.png";
import Image from "next/image";
import { manrope } from "@/utils/font";

export default function Motive() {
  return (
    <section className="w-[100%] h-[250px] sm:h-[82px] bg-motiveMobile sm:bg-motive bg-cover bg-no-repeat flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mt-[-8px]  sm:gap-[80px] p-[25px] sm:p-0 gap-[16px] mt-[-15px]">
      {/* free shipping */}
      <div className="free-shipping flex items-start gap-[16px]">
        <Image src={truck} height={32} width={32} alt="truck" />
        <div className={`${manrope.className}`}>
          <h1 className="font-medium text-white text-[16px] sm:text-[19px]">
            FREE SHIPPING
          </h1>
          <p className="text-[13px] text-white font-light">
            BUY BDT 3000+ & GET FREE DELIVERY
          </p>
        </div>
      </div>
      {/* exchange */}
      <div className="free-shipping flex items-start gap-[16px]">
        <Image src={exchange} height={32} width={32} alt="truck" />
        <div className={`${manrope.className}`}>
          <h1 className="font-medium text-white text-[16px] sm:text-[19px]">
            7 DAYS EXCHANGE
          </h1>
          <p className="text-[13px] text-white font-light">
            EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
          </p>
        </div>
      </div>
      {/* payment */}
      <div className="free-shipping flex items-start gap-[16px]">
        <Image src={payment} height={32} width={32} alt="truck" />
        <div className={`${manrope.className}`}>
          <h1 className="font-medium text-white text-[16px] sm:text-[19px]">
            100% PAYMENT SECURE
          </h1>
          <p className="text-[13px] text-white font-light">
            CASH ON DELIVERY AND SECURED ONLINE PAYMENT
          </p>
        </div>
      </div>
    </section>
  );
}
