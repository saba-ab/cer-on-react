import React from "react";
import slide1 from "./construction_worker_x2.png";
import slide2 from "./construction_worker_on.png";
import slide3 from "./blue-tower.jpeg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;
