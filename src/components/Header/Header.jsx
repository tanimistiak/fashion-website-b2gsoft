"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header>
      {/* logo */}
      <div className="logo-image">
        <Image src="/images/logo.png" width={200} height={100} alt="logo" />
      </div>
      {/* menus */}
      <nav className="nav-menus">
        <ul className="flex">
          <Link href="">Home</Link>
          <Link href="">Shop</Link>
          <Link href="">Deals</Link>
          <Link href="">What&apos;s new</Link>
        </ul>
      </nav>
      {/* icons */}
      <div className="icons-group">
        {/* search bar */}
        <div className="search-bar">
          <img src="/images/search.png" alt="search" />
          <input type="text" name="" id="" />
        </div>
      </div>
    </header>
  );
}
