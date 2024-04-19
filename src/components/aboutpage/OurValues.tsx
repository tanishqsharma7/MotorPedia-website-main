import { ourValues } from "../../data/data";
import FadeLeft from "../animation/FadeLeft";
import FadeTop from "../animation/FadeTop";

function OurValues() {
  return (
    <section className=" stp-30 sbp-30 bg-[url(/images/counter_bg.jpeg)] text-white">
      <div className="container">
        <div className="flex justify-center items-center max-xxl:overflow-hidden">
          <div className="  max-w-[700px] text-center flex justify-center items-center flex-col">
            <FadeLeft>
              <h1 className="display-4 text-[45px]  pt-4 pb-4 lg:pb-6">
                Our Values
              </h1>
            </FadeLeft>
            <FadeTop>
              <p className=" text-white text-lg">
                At Motorpedia, our values are the foundation of everything we
                do. They reflect our commitment to excellence, integrity, and
                client success.
              </p>
            </FadeTop>
          </div>
        </div>
        {/* <div className="text-white text-center">
          <h1 className="text-3xl pb-4">Our Values</h1>
          <p>
            At Motorpedia, our values are the foundation of everything we do.
            They reflect our commitment to excellence, integrity, and client
            success.
          </p>
        </div> */}
        <div className="grid grid-cols-12 gap-6 stp-15">
          {ourValues.map(({ id, icon, title, desc }) => (
            <div
              key={id}
              className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col"
            >
              <div className="text-6xl">{icon}</div>
              <h4 className="heading-4 pb-4 pt-3">{title}</h4>
              <p className="pb-5 text-center ">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
