import { healthCareFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import img from "/images/RSA.png";

function HealthCareSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="  max-w-[600px] flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">Warranty</p>
        </div>
        <SectionHeadingCenter
          sectionName="Healthcare"
          sectionTitle="Extended Coverage: Warranty and Roadside Assistance (RSA)"
          sectionDesc="Get all your vehicles certified by professionals and enable different warranty options for all your vehicles sold"
        />
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
            <img
              src={img}
              alt=""
              className="hover:scale-110 duration-500 w-full rounded-2xl h-[350px]"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center ">
            {healthCareFeatures.map(({ id, title, desc, icon }, idx) => (
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
                      <p className=" text-bodyText pt-3">{desc}</p>
                    </div>
                  </div>
                </StaggerEffect>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthCareSection;
