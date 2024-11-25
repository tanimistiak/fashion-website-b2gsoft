"use client";
import React from "react";
import SingleProductLandingPage from "./SingleProductLandingPage/SingleProductLandingPage";
import { useParams } from "next/navigation";

export default function page() {
  return (
    <div className="bg-[#F4F8FF]">
      <SingleProductLandingPage />
    </div>
  );
}
