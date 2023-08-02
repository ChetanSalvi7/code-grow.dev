import React, { useLayoutEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollToView } from "../component/Functions";

interface navigationInterface {
  name: string;
  href: string;
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navBarRef = useRef(null);

  const navigation: navigationInterface[] = [
    { name: "Who am i?", href: "whoami" },
    { name: "Resume", href: "resume" },
    { name: "Project's", href: "project" },
    { name: "Contact", href: "contact" },
  ];

  useLayoutEffect(() => {
    const q = gsap.utils.selector(navBarRef);
    const cleanGsap = gsap.context(() => {
      let tl = gsap.timeline({ defaults: { duration: 0.75, delay: 0.1 } });
      tl.fromTo(
        q(".brand-logo"),
        { scale: 0, ease: Power3.easeOut },
        {
          scale: 1,
          delay: 0.5,
          duration: 0.3,
        },
      ).fromTo(
        q(".nav-items"),
        { y: -50, opacity: 0, ease: Power3.easeOut },
        {
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          opacity: 1,
        },
      );
    }, navBarRef);

    return () => {
      cleanGsap.revert();
    };
  }, []);
  return (
    <React.Fragment>
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
        ref={navBarRef}
      >
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 brand-logo">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl md:text-2xl  font-bold">
                code-<span className={"text-primary"}>grow.dev</span>{" "}
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item: navigationInterface, index) => (
              <div
                role={"button"}
                key={item.name}
                onClick={() => ScrollToView(item.href)}
                className="text-base nav-items font-semibold leading-6 text-gray-900 hover:text-primary duration-300 ease-in-out "
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div
              role={"button"}
              onClick={() => ScrollToView("contact")}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Contact <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </nav>
        {/*Mobile menu, show/hide based on menu open state*/}
        <div
          className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          role="dialog"
          aria-modal="true"
        >
          {/*Background backdrop, show/hide based on slide-over state. -->*/}
          <div className="fixed inset-0 z-50 bg-white"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-white  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between px-4 py-4">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-xl md:text-2xl  font-bold">
                  Chetan_<span className={"text-primary"}>Salvi</span>{" "}
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full  bg-white min-h-[70vh]">
              <div className=" ">
                <div className="mx-auto py-6">
                  {navigation.map((item) => (
                    <div
                      role={"button"}
                      key={item.name}
                      onClick={() => {
                        ScrollToView(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block rounded-lg m-2 px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
