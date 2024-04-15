import NumberCounter from "../ui/NumberCounter";

function CounterSection() {
  return (
    <section className=" bg-[url(/images/counter_bg.jpeg)] bg-cover stp-30 sbp-30 relative ">
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        <div className="text-center max-w-[280px] ">
          <div>
            <p className="display-4 pb-3">
              <NumberCounter start={1} end={200} />+
            </p>
            <div className="text-3xl"> Dealers Onboarded </div>
          </div>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={0} end={5000} /> +{" "}
          </p>
          <div className="text-3xl"> Vehicles Processed </div>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={0} end={3000} />+
          </p>
          <div className="text-3xl"> Leads Generated </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
