import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";
import "./Carousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Carousel(props) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {props.images.map((item, index) => (
          <SwiperSlide>
            <div className="container pb-32 md:pb-0">
              <img
                src={item}
                alt="Event"
                className="image w-full h-auto md:w-3/4"
              />
              <div className="dark-overlay ">
                <div className="text p-12 text-sm md:text-lg text-white">
                  {props.descriptions[index]}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
