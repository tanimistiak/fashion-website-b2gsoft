"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="flex justify-center gap-96 items-center py-5 bg-[#F5F3FF]">
      {/* logo */}
      <div className="logo-image">
        <Image src="/images/logo.png" width={200} height={100} alt="logo" />
      </div>
      {/* menus */}
      <nav className="nav-menus">
        <ul className="flex gap-10">
          <Link href="/" className={`${pathName === "/" && "text-[#581FC1]"}`}>
            Home
          </Link>
          <Link href="/products">Shop</Link>
          <Link href="">Deals</Link>
          <Link href="">What&apos;s new</Link>
        </ul>
      </nav>
      {/* icons */}
      <div className="icons-group flex items-center gap-5">
        {/* search bar */}
        <div className="search-bar flex items-center h-[35px]">
          <div className="search h-full bg-[#FFFFFF] px-3 rounded-bl-[17px] rounded-tl-[17px]">
            <Image
              src="/images/search.png"
              alt="search"
              height={16}
              width={16}
              className="mt-[50%]"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="rounded-br-[17px] rounded-tr-[17px] h-full border-none outline-none"
          />
        </div>
        {/* cart */}
        <div>
          <Image src="/images/cart.png" alt="cart" height={24} width={24} />
        </div>
        {/* account */}
        <div>
          <Image src="/images/user.png" alt="account" height={24} width={24} />
        </div>
      </div>
    </header>
  );
}
