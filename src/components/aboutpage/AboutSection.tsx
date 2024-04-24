// import { useState } from "react";

import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import BreadCrumb from "../ui/BreadCrumb";
import vector from "/images/about_vector.png";
import circleIcon from "/images/bg_car.png";
function AboutSection() {
  // const [isOpen, setOpen] = useState(false);
  return (
    <section className="pt-24 lg:pt-30 sbp-30 bg-[url(/images/texture.png)] bg-repeat stp-30 hero_bg_gradient overflow-hidden relative">
      <img
        src={circleIcon}
        alt=""
        className="absolute top-35 -right-40 max-lg:h-2 max-sm:hidden"
      />
      <img
        src={vector}
        alt=""
        className="absolute top-36 right-0 xl:right-28 max-lg:hidden"
      />
      <div className="container pb-10">
        <BreadCrumb pageName="About Us" />
      </div>
      <div className="flex justify-center place-items-start pl-20 pt-10 flex-col">
        <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
          <div className="  max-w-[600px]  flex justify-center items-center flex-col ">
            <h1 className="display-4 pt-4 pb-6">Welcome to MotorPedia</h1>
            <p className="text-bodyText text-lg text-justify">
              Your ultimate destination for revolutionizing auto dealerships!
              Our mission is to transform traditional dealership experiences
              into AI-powered hubs of innovation and efficiency. At MotorPedia,
              our dedicated team is committed to streamlining every aspect of
              your dealership operations, ensuring exceptional customer
              experiences and unparalleled growth
            </p>
          </div>
        </div>
        {/* <div className="bg-[url('/images/aboutVideoImg.png')] stp-30 sbp-30 w-[80%] h-[300px] bg-cover md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[800px] flex justify-center items-center z-10 relative after:absolute after:inset-0 after:bg-black/20 ">
          <button
            onClick={() => setOpen(true)}
            className=" bg-softBg1 text-p1 p-6 lg:p-7 rounded-full text-3xl lg:text-4xl hover:bg-s2 hover:text-white duration-500 relative z-20"
          >
            <PiPlayFill />
          </button>
        </div> */}
      </div>
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="ERyzAnU62hU"
        onClose={() => setOpen(false)}
      /> */}
    </section>
  );
}

export default AboutSection;
