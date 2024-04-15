import { whyMotorpediaCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhyAccoupay() {
  return (
    <section className=" bg-[url(/images/counter_bg.jpeg)]  stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <h1 className="display-4  text-white  pt-4 ">Why Us ?</h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whyMotorpediaCard.map(({ id, img, title, des }, idx) => (
            <div
              key={id}
              className="col-span-12 sm:col-span-6 shadow-2xl lg:col-span-3  "
            >
              <StaggerEffect id={idx}>
                <div className="bg-white flex  flex-col items-center h-[400px] hover:shadow-2xl rounded-2xl border-white group duration-700">
                  <div className="">
                    <img
                      className="h-[250px] w-[400px]  rounded-t-2xl"
                      src={img}
                      alt=""
                    />
                  </div>
                  <h4 className="pt-2 text-black heading-4 text-wrap md:pl-3">
                    {title}
                  </h4>
                  <p className="p-4 text-wrap text-center">{des}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAccoupay;
