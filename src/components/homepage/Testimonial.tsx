// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliceIcon from "/images/sliceIcon.png";
import { testimonials } from "../../data/data";

function Testimonial() {
  return (
    <section className="stp-30 sbp-30 relative">
      <div className=" overflow-hidden">
        <img
          src={sliceIcon}
          alt="testimonials motorpedia"
          className="absolute top-0 right-2 -rotate-90 max-md:h-[80px]"
        />
      </div>
      <div className="container">
        <div className="flex justify-center items-cneter gap-6 max-lg:flex-col max-lg:items-center">
          <div className="  max-w-[600px] flex justify-center items-center flex-col">
            <h1 className="display-4  pt-4 ">Testimonials</h1>
          </div>
        </div>
      </div>
      <div className="sponsors stp-15">
        <Swiper
          className="!flex !justify-center !items-center"
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          loop={true}
          speed={6000}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            674: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map(({ id, name, designation, review }) => (
            <SwiperSlide key={id}>
              <div className="border  p-12 flex flex-col rounded-2xl shadow-sm bg-gray-100 justify-center items-center hover:bg-gray-200  hover:shadow-lg hover:scale-90 hover:border-mainTextColor duration-100 h-[240px]">
                <p className="text-bodyText  text-justify">"{review}"</p>
                <div className="flex gap-3 pt-3">
                  <div className="">
                    <p className="text-lg text-center font-medium">{name}</p>
                    <p className="text-center">{designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
