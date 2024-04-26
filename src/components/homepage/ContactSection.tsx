import { Link } from "react-router-dom";
import { contactCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function ContactSection({ isPaddingTop }: { isPaddingTop?: boolean }) {
  return (
    <section className={`sbp-30 ${isPaddingTop ? "stp-30" : ""}`}>
      <br></br>
      <div className="container">
        <div className="flex justify-center items-cneter gap-6 max-lg:flex-col max-lg:items-center">
          <div className="  max-w-[600px] flex justify-center items-center flex-col">
            <h1 className="display-4  pt-4 ">Get In Touch</h1>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-8  stp-15">
          {contactCard.map(
            ({ id, icon, title, desc, linkText, linkto }, idx) => (
              <div
                key={id}
                className="col-span-12 min-[450px]:col-span-6 md:col-span-3 "
              >
                <StaggerEffect id={idx}>
                  <div className="flex justify-center items-center flex-col">
                    <div className="text-7xl text-s1">{icon}</div>
                    <h4 className="heading-4 pb-4 pt-3">{title}</h4>
                    <p className="pb-5 text-center">{desc}</p>
                    <Link to={linkto} className="text-s1 underline font-medium">
                      {linkText}
                    </Link>
                    {/* <Link
                    to={"/contact"}
                    className="text-s1 underline font-medium"
                  >
                    {linkText}
                  </Link> */}
                  </div>
                </StaggerEffect>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
