import React from "react";
import truck from "../assets/motive/truck.png";
import exchange from "../assets/motive/exchange.png";
import payment from "../assets/motive/payment.png";
import Image from "next/image";
export default function Motive() {
  return (
    <section>
      <div className="free-shipping">
        <Image src={truck} height={32} width={32} alt="" />
      </div>
    </section>
  );
}
