import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ChetanImage from "../assests/chetan-illustration.png";
import LaptopImage from "../assests/laptop-illustration.png";
import ReactPng from "../assests/Logo/pngwing.com (6).png";
import HtmlPng from "../assests/Logo/pngwing.com (3).png";
import NpmPng from "../assests/Logo/pngwing.com (5).png";
import JSPng from "../assests/Logo/pngwing.com (2).png";
import TSPng from "../assests/Logo/pngwing.com (4).png";
import CssPng from "../assests/Logo/pngwing.com (1).png";
import GitPng from "../assests/Logo/pngwing.com (7).png";
import GsapPng from "../assests/Logo/pngwing.com (8).png";
import { ScrollToView } from "../component/Functions";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.registerPlugin(ScrollTrigger);
    const cleanGsap = gsap.context(() => {
      // bg text parallax effect
      gsap.to(q(".bg-text"), {
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: q(".bg-text"),
          scrub: false,
        },
        y: 350,
      });

      // text animation after initial load
      let tl = gsap.timeline({
        defaults: { stagger: 0.3, duration: 0.7, delay: 0.1 },
      });
      tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 1 });

      tl.fromTo(
        q(".image-animation"),
        { scale: 2, opacity: 0, ease: Power3.easeOut },
        { scale: 1, opacity: 1 },
        "-=0.5",
      );
      tl.fromTo(
        q(".hero-desc"),
        { scale: 0, ease: Power3.easeOut },
        { scale: 1 },
      );
      tl.fromTo(
        q(".contact-button"),
        { scale: 0, ease: Power3.easeOut },
        { scale: 1 },
      );
      tl.fromTo(
        q(".notificationItem"),
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: {
            each: 0.2,
          },
        },
      );
      // illustration floating effect
      let imgTl = gsap.timeline({ repeat: -1 });
      imgTl
        .to(q(".image-animation"), 3, {
          y: "-=30",
          x: "+=20",
          rotation: "-=2",
          ease: "power1.easeInOut",
        })
        .to(q(".image-animation"), 2, {
          y: "+=30",
          x: "-=20",
          rotation: "-=2",
          ease: "power1.easeInOut",
        })
        .to(q(".image-animation"), 3, {
          y: "-=20",
          rotation: "+=2",
          ease: "power1.easeInOut",
        })
        .to(q(".image-animation"), 3, {
          y: "+=20",
          rotation: "+=2",
          ease: "power1.easeInOut",
        });

      // laptop floating effect
      let laptopTl = gsap.timeline({ repeat: -1 });
      laptopTl
        .to(q(".laptop"), 3, {
          y: "-=10",
          x: "+=10",
          rotation: "-=1",
          ease: "Power1.easeInOut",
        })
        .to(q(".laptop"), 2, {
          y: "+=10",
          x: "-=10",
          rotation: "-=1",
          ease: "power1.easeInOut",
        })
        .to(q(".laptop"), 3, {
          y: "-=10",
          rotation: "+=1",
          ease: "power1.easeInOut",
        })
        .to(q(".laptop"), 3, {
          y: "+=10",
          rotation: "+=1",
          ease: "power1.easeInOut",
        });
    }, sectionRef);
    return () => {
      cleanGsap.revert();
    };
  }, []);
  return (
    <React.Fragment>
      <section
        ref={sectionRef}
        className="relative  mt-28 sm:mt-8 pt-10 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-screen mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
      >
        <span
          aria-hidden="true"
          className="blended-text bg-text absolute -top-36 rotate-12 text-gray-100  text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0"
        >
          PASSIONATE PROGRAMMER FREELANCER FRONT-END DEVELOPER
        </span>

        <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
          <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
            <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
              <img
                src={ChetanImage}
                width={1177}
                height={1374}
                id="character-illustration"
                alt="chetan salvi character illustration"
              />
            </div>
            <div className="laptop absolute top-14 sm:top-16 left-0 scale-[.41] xs:scale-[.45] pointer-events-none">
              <img
                src={LaptopImage}
                width={559}
                height={386}
                aria-hidden="true"
                alt="Laptop illustration"
              />
            </div>
          </div>
        </div>

        <div className="lg:basis-2/3 z-10 relative">
          <span className="blended-text text-primary lg:text-lg font-medium ">
            Hi my name is
          </span>
          <div className="overflow-hidden">
            <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
              Chetan Salvi
            </h1>
          </div>
          <div className="overflow-hidden">
            <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-primary  font-medium">
              A Front-end Developer
            </span>
          </div>

          <div className="mt-2 my-4 md:mb-8 text-gray-600 hero-desc">
            <p className="mb-1">
              I am a Front-end Developer who has a passion for delivering
              high-quality web applications.
            </p>
            <p>
              With my expertise in JavaScript, React and NextJS on the frontend,
              My unique combination of technical skills and creative
              problem-solving skills makes me an invaluable asset to any project
              I am involved in.
            </p>
          </div>
          <button
            type={"button"}
            onClick={() => ScrollToView("contact")}
            className={
              "bg-primary contact-button px-6 py-3 rounded-lg font-semibold text-white"
            }
          >
            Contact me!
          </button>
        </div>
        <div
          onClick={() => ScrollToView("whoami")}
          className="group z-10 absolute cursor-pointer link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
        >
          <span className="group-hover:text-primary ">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="group-hover:fill-primary "
          >
            <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
            <path d="M11 6h2v6h-2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className=" group-hover:fill-primary "
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </div>
        <div
          className={
            "absolute w-full top-0 translate-x-[200px] h-[90vh] notificationListing"
          }
        >
          <div className={"hidden md:block container relative h-full"}>
            <div className={"notificationItem absolute left-[-40%] top-[20%]"}>
              <img src={ReactPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div className={"notificationItem absolute left-[6%] bottom-[12%]"}>
              <img src={HtmlPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div
              className={"notificationItem absolute left-[-20%] bottom-[-5%]"}
            >
              <img src={NpmPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div className={"notificationItem absolute right-[-2%] top-[10%]"}>
              <img src={JSPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div
              className={"notificationItem absolute right-[18%] bottom-[12%]"}
            >
              <img src={TSPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div className={"notificationItem absolute right-[15%] top-[28%]"}>
              <img src={CssPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
            <div
              className={"notificationItem absolute left-[-45%] bottom-[25%]"}
            >
              <img src={GsapPng} alt={"logos"} className={"max-h-[80px]"} />
            </div>
            <div
              className={"notificationItem absolute right-[-8%] bottom-[38%]"}
            >
              <img src={GitPng} alt={"logos"} className={"max-h-[60px]"} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
