import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

import clientLogo1 from "../../Assets/ClientLogos/247432077_100874932403856_5966410484172671842_n-removebg-preview.png";
import clientLogo2 from "../../Assets/ClientLogos/298066378_170937288769108_3953624624276989828_n-removebg-preview.png";
import clientLogo3 from "../../Assets/ClientLogos/Copy-of-Copy-of-KidsCrap-1.png";
import clientLogo4 from "../../Assets/ClientLogos/Logo 1.png";
import clientLogo5 from "../../Assets/ClientLogos/WhatsApp-Image-2022-02-19-at-10.01.49-PM-removebg-preview.png";
import clientLogo6 from "../../Assets/ClientLogos/Lotus flower logo gradient.png";
import clientLogo7 from "../../Assets/ClientLogos/WhatsApp_Image_2022-12-05_at_10.31.36-removebg-preview.png";
import clientLogo8 from "../../Assets/ClientLogos/logo-300x300.png";
import clientLogo9 from "../../Assets/ClientLogos/ZUVOMO-LOGO-THICK.jpg";
function Clients() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="px-10 py-10 lg:px-80 clients-sec">
      <h2 className="text-4xl lg:pb-10 font-semibold text-orange-500">
        Our Clients
      </h2>
      <div>
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          modules={[Pagination, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <div className="">
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo4} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-40" src={clientLogo5} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo6} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="clientLogos w-60 justify-center content-center"
                src={clientLogo7}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo8} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="clientLogos w-60" src={clientLogo9} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
