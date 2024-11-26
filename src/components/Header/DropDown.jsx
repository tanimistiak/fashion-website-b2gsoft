"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DropDown({ dropDown }) {
  //   console.log(dropDown);
  const pathName = usePathname();
  return (
    <div
      className="w-[100%] h-[100px] absolute bg-[white] top-[-100%] flex justify-center items-center z-10"
      style={{
        top: dropDown && "80px",
        transition: "all",
        transitionDuration: "500ms",
      }}
    >
      <nav className="nav-menus block md:hidden">
        <ul className="flex gap-[16px]">
          <Link href="/" className={`${pathName === "/" && "text-[#581FC1]"}`}>
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
    </div>
  );
}
