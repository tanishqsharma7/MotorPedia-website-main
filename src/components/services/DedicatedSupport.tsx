import LinkButton from "../ui/LinkButton";

function DedicatedSupport() {
  return (
    <section className="stp-30 sbp-30 bg-[url(/images/counter_bg.jpeg)] ">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden">
          <div className="sm:h-300px sm:w-400px lg:w-700px lg:h-500px">
            <iframe
              src="https://spins.impel.io/motorpedia/up83bb2565"
              name="myiFrame"
              scrolling="no"
              width="400px"
              height="500px"
            ></iframe>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">
            Professional Photoshoot
          </p>
          <h2 className="display-4 pt-4 text-white pb-6">360° WalkArounds</h2>
          <p className=" text-white pb-8">
            Revolutionize your online shopping experience with immersive,
            jaw-dropping features such as branded virtual studios and 360°
            vehicle spins that leave shoppers spellbound
          </p>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default DedicatedSupport;
