"use client";
import { useCart } from "@/context/CartContext";
import { nunito } from "@/utils/font";
import { Search01Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DropDown from "./DropDown";

export default function Header() {
  const pathName = usePathname();
  const { cartCount } = useCart();
  const [dropDown, setDropDown] = useState(false);
  // console.log(cartCount);
  return (
    <div>
      <header className="flex justify-between px-5 sm:px-0 sm:justify-evenly items-center py-5 bg-[#F5F3FF] w-[100%]">
        {/* logo */}
        <div className="logo-image flex gap-2 items-center">
          {/* mobile menu */}
          <div
            className="hamburger md:hidden"
            onClick={() => setDropDown(!dropDown)}
          >
            <div className="icon">
              <Image
                src="/images/hamburger.png"
                width={24}
                height={24}
                alt="hamburger"
              />
            </div>
          </div>
          <img
            src="/images/logo.png"
            className="w-[96px] h-[24px] sm:w-[161px] sm:h-[40px]"
            alt="logo"
          />
        </div>
        {/* menus */}
        <nav className="nav-menus hidden md:block">
          <ul className="flex gap-[16px]">
            <Link
              href="/"
              className={`${pathName === "/" && "text-[#581FC1]"}`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`${pathName.includes("product") && "text-[#581FC1]"}`}
            >
              Shop
            </Link>
            <Link href="">Deals</Link>
            <Link href="">What&apos;s new</Link>
          </ul>
        </nav>
        {/* icons */}
        <div className="icons-group flex items-center gap-[16px]">
          {/* search bar */}
          <div className="search-bar flex items-center h-[35px]">
            <div className="flex justify-center items-center md:flex search h-full md:bg-[#FFFFFF] sm:px-3 sm:rounded-bl-[17px] sm:rounded-tl-[17px]">
              {/* for pc */}
              <Search01Icon className="hidden md:block" size={16} />
              {/* for mobile */}
              <Search01Icon size={24} className="md:hidden" />
            </div>
            <input
              type="text"
              name=""
              id=""
              className="rounded-br-[17px] rounded-tr-[17px] h-full border-none outline-none hidden md:block"
            />
          </div>
          {/* cart */}
          <div>
            <div className="h-[24px] w-[30px] relative">
              <Image src="/images/cart.png" alt="cart" height={24} width={24} />
              <div
                className={`w-[16px] h-[16px] bg-[#1E1E1E] flex justify-center items-center ${nunito.className} text-[12px] text-[#F4F8FF] rounded-[8px] absolute top-0 right-0`}
              >
                {cartCount}
              </div>
            </div>
          </div>
          {/* account */}
          <div>
            <Image
              src="/images/user.png"
              alt="account"
              height={24}
              width={24}
            />
          </div>
        </div>
      </header>

      <DropDown dropDown={dropDown} />
    </div>
  );
}
