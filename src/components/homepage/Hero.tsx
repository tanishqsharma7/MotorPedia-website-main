import { Link } from "react-router-dom";
import StaggerEffectTwo from "../animation/StaggerEffectTwo";
import heroBgElement2 from "/images/hero_bg_element2.png";
import heroBgElement3 from "/images/hero_bg_element3.png";

function Hero() {
  const text = "Automotive";
  const animateWord = text.split("");
  return (
    <section className="bg-[url(/images/texture.png)] bg-repeat stp-30 hero_bg_gradient overflow-hidden">
      <img
        src="https://i.ibb.co/7YLs1YK/hero-bg-element1.png"
        alt="main car image motorpedia"
        className=" absolute top-0 left-0 xxxl:left-36 max-lg:w-[3000px] max-xxl:w-[5000px] max-md:hidden"
      />
      <img
        src={heroBgElement2}
        alt="secondary image car "
        className=" absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
      />
      <div className="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12 ">
        <img
          src={heroBgElement3}
          alt="tertiary image car"
          className=" absolute top-1/3 left-1/3 max-sm:hidden"
        />
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className=" text-base  lg:text-[25px] font-semibold">
            Driving Success Together{" "}
          </p>
          <div className="display-2 lg:text-nowrap">
            We Empower<br></br>
            <div className="text-s3 inline-flex">
              {animateWord.map((word, idx) => (
                <StaggerEffectTwo key={idx} id={idx}>
                  <span>{word}</span>
                </StaggerEffectTwo>
              ))}
            </div>
            <br /> Dealerships
          </div>
          <p className="max-w-[550px] text-[18px]">
            We streamline your dealership with Effortless Digitalization,
            Seamless RTO Operations, Enhanced Leads and Maximized Conversions
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              to={"/services"}
              className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className="col-span-9 lg:col-span-6 lg:col-start-7 ">
          <img
            src="https://i.ibb.co/S5mLFyh/bghero.png"
            className=" mr-[50px] mt-7 lg:w-auto lg:h-auto pr-[90px] "
            alt="hero image car"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
