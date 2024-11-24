import React from "react";
import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Offer from "./Offer/Offer";
import CollectionSlider from "./CollectionSlider/CollectionSlider";
import BigDeal from "./BigDeal/BigDeal";

export default function LandingPage() {
  return (
    <section className="bg-[#F4F8FF] pb-20">
      {/* banner */}
      <Banner />
      <FeaturedProducts />
      <Offer />
      <CollectionSlider />
      <BigDeal />
    </section>
  );
}
