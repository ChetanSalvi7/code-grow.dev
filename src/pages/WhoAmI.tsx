import React, { useEffect, useRef } from "react";
import EduGroup from "./EduGroup";
import ChetanImage from "../assests/chetan's_pic.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutBgSvg from "../assests/_helper/AboutBgSvg";

const WhoAmI = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // profile-picture
    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "top center",
          end: "bottom center ",
        },
      },
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      clipPath: `circle(100% at 50% 50%)`,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        delay: 0.3,
        scroll: true,
        start: "top center",
      },
    });

    // about-intro
    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

    // edu-bg
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      },
    );

    // image bg svg parallax effect
    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      },
    );
  }, []);

  const eduRef = useRef<HTMLDivElement>(null);

  // JavaScript code

  return (
    <React.Fragment>
      <div ref={sectionRef} className="about-panel bg-white relative ">
        <section
          id="whoami"
          className="section container mx-auto pt-20 min-h-[80vh]"
        >
          <div className="md:grid grid-rows-4 lg:grid-rows-4 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-4 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 ">
              <div className="relative w-72">
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-primary absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>

                <div className="profile-picture bg-gray-300 ease-in-out duration-300  overflow-hidden md:overflow-visible  rounded-md md:shadow-2xl">
                  <img
                    src={ChetanImage}
                    width={1700}
                    height={1790}
                    alt="Sat Naing profile picture"
                    className="rounded-md grayscale  hover:scale-105 ease-in-out duration-300 "
                  />
                </div>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-primary  absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>

            <div className="col-start-1 px-5 md:px-0 col-end-3 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro">
              <div className="text-start my-5 inline-block font-semibold md:text-3xl text-xl text-primary">
                Who am I?
              </div>
              <div>
                With {calculateYearGap()} years of comprehensive experience in
                web application development, I have honed my skills in frontend
                development. In addition to my hands-on experience in web
                development.
              </div>
            </div>

            <div
              className="col-start-3 px-5 md:px-0 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <p className="edu-bg my-4">Here is my journey.</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
          </div>
        </section>

        <AboutBgSvg />
      </div>
    </React.Fragment>
  );
};

export default WhoAmI;

const educationInfo = [
  {
    id: 1,
    title: "Front-end developer",
    subTitle: "Applie Infosol Gift City, Gandhinagar | 2022 ~ Present",
    list: [
      "Collaborated with cross-functional teams to design and develop high-quality web applications using React.js," +
        " Redux, and other front-end technologies.",
      "Implemented responsive and user-friendly designs using CSS, SCSS, and popular front-end " +
        "libraries like Bootstrap and Taiwlind.",
      "Utilized Git for version control and collaborated with the team on code merges, branch\n" +
        "management, and bug fixes.",
      "Conducted code reviews and testing to ensure the quality, performance, and maintainability\n" +
        "of the codebase.",
    ],
  },
  {
    id: 2,
    title: "B.Sc & B.Ed in Science",
    subTitle: "Mohanlal Sukhadia University, Udaipur | 2018 ~ 2021",
    list: [
      "Studied Physics & Mathematics, Human physiology",
      "Graduated with First Class Honours",
      "Got merit in 7 modules out of 9",
    ],
  },
];

function calculateYearGap() {
  const startYear = 2021;
  const endYear = new Date().getFullYear();
  const yearGap = endYear - startYear;
  return yearGap;
}
