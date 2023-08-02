import ReactPng from "../assests/Logo/pngwing.com (6).png";
import Redux from "../assests/Logo/redux.svg";
import AxiosSvg from "../assests/Logo/axios.svg";
import TSPng from "../assests/Logo/pngwing.com (4).png";
import GsapPng from "../assests/Logo/pngwing.com (8).png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function LogClouds() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    const fromAnimation = {
      scale: 0.5,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        delay: 0.3,
        scrub: true,
        scroll: true,
        stagger: {
          each: 0.2,
        },
        start: "top bottom",
      },
    });
    const cleanGsap = gsap.context(() => {
      gsap.fromTo(
        q(".clouds-items"),
        fromAnimation,
        toAnimation("clouds-items"),
      );
    }, sectionRef);
    return () => {
      cleanGsap.revert();
    };
  }, []);
  return (
    <div className="main-clouds bg-white py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Currently using in my frontend development projects.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="clouds-items col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={ReactPng}
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="clouds-items col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={GsapPng}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="clouds-items col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Redux}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="clouds-items col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={AxiosSvg}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="clouds-items col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={TSPng}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
