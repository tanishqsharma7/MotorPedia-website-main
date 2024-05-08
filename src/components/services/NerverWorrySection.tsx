import { neverWorry } from "../../data/data";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";

function NerverWorrySection() {
  return (
    <section className="bg-[url(/images/counter_bg.jpeg)] stp-30 sbp-30 max-xxl:overflow-hidden text-white">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden ">
          <FadeLeft>
            <img
              src="https://i.ibb.co/S6sLLm4/image2.jpg"
              alt=""
              className="hover:scale-110 duration-500 w-screen h-full"
            />
          </FadeLeft>
        </div>

        <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
          <FadeRight>
            <h1 className="display-4 ">
              Never worry about your RTO services again
            </h1>
            <p className="pt-6 text-white pb-6 xl:pb-8">
              Navigating the bureaucracy of vehicle registration and transfer
              can be a daunting task. Let us take the stress out of the process
              with our comprehensive RTO services.
            </p>
            <div className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12">
              {neverWorry.map(({ id, title, desc, icon }) => (
                <div key={id} className="flex justify-start items-center gap-4">
                  <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white">
                    {icon}
                  </div>
                  <div className="">
                    <h4 className="heading-4">{title}</h4>
                    <p className=" text-white pt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default NerverWorrySection;
