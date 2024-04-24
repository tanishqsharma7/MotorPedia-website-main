//import img from "/images/SaleS2.jpg";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import FadeLeft from "../animation/FadeLeft";

import { conversionRate } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function TaxationVideoSection() {
  return (
    <section className=" bg-[url(/images/counter_bg.jpeg)] stp-30 sbp-30 text-white">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6">
          <FadeLeft>
            <div className=" flex justify-center items-start flex-col">
              <h2 className="display-4">
                Revitalize Your Exchange Counters: Enhanced Conversion Rate
              </h2>
              <p className=" text-white pt-4">
                Discover the ultimate vehicle exchange experience at your New
                Car Dealership - trade up your inbound exchange leads
                hassle-free with our premier Vehicle Exchange platform and get
                guaranteed improvement in your exchange penetration
              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-start-8  ">
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center ">
            {conversionRate.map(({ id, title, desc, icon }, idx) => (
              <div className="" key={id}>
                <StaggerEffect id={idx}>
                  <div
                    key={id}
                    className="flex justify-start items-start gap-4"
                  >
                    <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 ">
                      {icon}
                    </div>
                    <div className="">
                      <h4 className="heading-4">{title}</h4>
                      <p className=" text-white pt-3">{desc}</p>
                    </div>
                  </div>
                </StaggerEffect>
              </div>
            ))}
          </div>
          {/* <FadeRight>
            <div className=" relative flex justify-center items-center bg-[url('/images/taxation_video_img.png')] bg-no-repeat bg-cover  max-[400px]:h-[250px] max-[500px]:h-[300px] h-[370px] sm:h-[400px]">
              <img src={img} className="h-[400px]" alt="" />
            </div>
          </FadeRight> */}
        </div>
      </div>
    </section>
  );
}

export default TaxationVideoSection;
