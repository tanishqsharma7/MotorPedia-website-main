import { Link } from "react-router-dom";
import { coreServices } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function CoreServices() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-w-[600px]  flex-col">
            <h1 className="display-4">Core Offerings</h1>
            <p className="text-bodyText pt-6 text-center">
              We cater to nearly all your needs in the vehicle transaction
              journey, broadly classified across three domains.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 stp-15 gap-6">
          {coreServices.map(({ id, icon, title, desc, link }, idx) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 " key={id}>
              <StaggerEffect id={idx}>
                <Link to={link}>
                  <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor rounded-lg duration-500">
                    <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                      {icon}
                    </div>

                    <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                      {title}
                    </h4>

                    <p className=" text-bodyText lg:pr-4 text-justify">
                      {desc}
                    </p>
                  </div>
                </Link>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
