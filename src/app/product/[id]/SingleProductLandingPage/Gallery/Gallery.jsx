import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Gallery.css";
// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperNavigation from "@/components/Homepage/SwiperNavigation/SwiperNavigation";
import ArrowLeft from "@/components/Homepage/SwiperNavigation/ArrowLeft";
import ArrowRight from "@/components/Homepage/SwiperNavigation/ArrowRight";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const images = [
    "/images/g1.png",
    "/images/g2.png",
    "/images/g3.png",
    "/images/g4.png",
    "/images/g5.png",
  ];
  return (
    <>
      <div className="relative">
        <div className="absolute z-[10] top-[50%]">
          {/* <SwiperNavigation swiper={swiperInstance} /> */}
          <ArrowLeft swiper={swiperInstance} />
        </div>
        <div className="absolute z-[10] right-0 top-[50%]">
          {/* <SwiperNavigation swiper={swiperInstance} /> */}
          <ArrowRight swiper={swiperInstance} />
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="gallerySlider"
          onSwiper={setSwiperInstance}
        >
          {images?.map((image, index) => (
            <SwiperSlide
              key={index}
              className="gallery-swiper-slider rounded-[16px]"
            >
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper bg-[#F6F5FD]"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#ECE9FE] relative rounded-[16px]"
          >
            <img src={image} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
