import React from "react";
import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Offer from "./Offer/Offer";
import CollectionSlider from "./CollectionSlider/CollectionSlider";
import BigDeal from "./BigDeal/BigDeal";
import CollectionForMobile from "./CollectionForMobile/CollectionForMobile";

export default function LandingPage() {
  return (
    <section className="bg-[#F4F8FF] pb-20">
      {/* banner */}
      <Banner />
      <FeaturedProducts />
      <Offer />
      <div className="hidden sm:block">
        <CollectionSlider />
      </div>
      {/* for mobile */}
      <div className="block sm:hidden">
        <CollectionForMobile />
      </div>
      <BigDeal />
    </section>
  );
}
