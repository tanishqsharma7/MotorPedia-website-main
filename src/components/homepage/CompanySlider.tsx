// Import Swiper styles
import "swiper/css";
// Import Swiper React components
//import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo12 from "/images/cars24.png";
import logo2 from "/images/spinny1.png";
import logo3 from "/images/mfc_logo.png";
import logo4 from "/images/bbt_logo.png";
import logo5 from "/images/bikespe_logo.jpg";
import logo6 from "/images/carghar.png";
import logo7 from "/images/91trucks.jpg";
import logo8 from "/images/yocarz.png";
import logo9 from "/images/briteskoda.png";
import logo10 from "/images/autonation1.jpg";
import logo11 from "/images/carandbike1.png";

const sponsorsImg = [
  logo2,
  logo3,
  logo5,
  logo6,
  logo7,
  logo4,
  logo8,
  logo9,
  logo10,
  logo12,
  logo11,
];

function CompanySlider() {
  return (
    <section className="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor">
      <div className="col-span-12 sm:col-span-6 xl:col-span-3">
        <p className="text-xl lg:text-2xl text-bodyText relative max-xxl:after:content-none">
          <span className="text-[20px] font-bold">
            {" "}
            Trusted by countless businesses,<br></br> loved by thousands of
            customers
          </span>
        </p>
      </div>
      <div className="col-span-12 sm:col-span-6  xl:col-span-9 flex pt-4 ">
        <Swiper
          className="!justify-center !items-center sponsors "
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: true,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {sponsorsImg.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="!mr-0 p-0">
                <img src={item} alt="sponsor image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CompanySlider;
