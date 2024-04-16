import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ScrollToTopButton() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <Link to="https://wa.me/+919205522250">
      <button
        className={`fixed ${
          scrolled ? " bottom-12 sm:bottom-16" : "-bottom-40"
        }  text-xl sm:text-2xl  rounded-full hover:border-white right-6 md:right-10 p-2 sm:p-3  z-40 jumping1 duration-700 size-[50px]`}
        aria-label="bottom to top button"
      >
        <span className=" block size-[50px] ">
          <img src="/images/whatsapp.png" />
        </span>
      </button>
    </Link>
  );
}
