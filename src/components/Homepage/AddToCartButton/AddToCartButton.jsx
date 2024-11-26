import { useCart } from "@/context/CartContext";
import { manrope } from "@/utils/font";
import React from "react";

export default function AddToCartButton({ item }) {

  const { addItem } = useCart();

  const handleAddToCart = () => {
   
    addItem({ id: item?.id, name: item?.name, quantity: 1 });
  };
  return (
    <div
      onClick={() => handleAddToCart()}
      className={`cart-button w-[100%] h-[40px] border-[#7E53D4] border-2 rounded-[8px] flex justify-center items-center ${manrope.className} font-semibold text-[#7E53D4] hover:text-[#F4F8FF] hover:bg-[#6F42C1] transition-all duration-500`}
    >
      Add to Cart
    </div>
  );
}
