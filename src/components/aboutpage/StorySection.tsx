import { storyData } from "../../data/data";
//import img from "/images/motorPedia_ceo.jpeg";

function StorySection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 max-lg:gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">Our Story</p>
          <h1 className="display-4 pt-4 pb-6">
            In 2023, an exciting journey began with a daring vision
          </h1>
          <br></br>

          <p className="heading-4 lg:text-[32px] pt-4 pb-6">
            “Our commitment? Simple - to inspire, innovate and exceed
            expectations. Welcome to our revolution.”
          </p>
          <div className="flex justify-start items-center gap-3">
            {/* <img
              src={img}
              alt=""
              className="rounded-full w-[150px] h-[150px] "
            /> */}
            {/* <div className="">
              <p>Rajat Upadhyaya</p>
              <p className=" text-bodyText text-sm">CEO, MotorPedia</p>
            </div> */}
          </div>
        </div>

        <div className=" lg:col-start-7 col-span-12 md:col-span-6 flex flex-col gap-6 lg:gap-10 max-md:pt-6">
          {storyData.map(({ id, title, desc }) => (
            <div className="border-b pb-6 lg:pb-10" key={id}>
              <h4 className="heading-4 pb-6">{title}</h4>
              <p className=" text-bodyText text-justify">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StorySection;
