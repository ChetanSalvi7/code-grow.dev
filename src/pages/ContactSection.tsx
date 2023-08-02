import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.registerPlugin(ScrollTrigger);
    const fromAnimation = {
      scale: 0,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        scrub: true,
        stagger: {
          each: 0.1,
        },
        scroll: false,
        start: "top bottom",
        end: "top center",
      },
    });
    const cleanGsap = gsap.context(() => {
      gsap.fromTo(
        q(".contact-items-1"),
        fromAnimation,
        toAnimation("contact-items-1"),
      );
      gsap.fromTo(
        q(".contact-items-2"),
        fromAnimation,
        toAnimation("contact-items-1"),
      );
    }, sectionRef);
    return () => {
      cleanGsap.revert();
    };
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[400px] text-center main-section-1"
    >
      <div className="text-center contact-items-1">
        <h2 className="text-2xl inline-block my-6 font-semibold ">Contact</h2>
      </div>
      <div className="mt-8 mb-20 contact-items-2">
        <h3 className="font-semibold text-lg mb-2 md:text-3xl ">
          Let's be awesome together!
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
          As a dev, I am driven by my love for coding and my desire for new
          challenges. If you have opportunities for collaboration or want to
          build something amazing, don't hesitate to contact me!
        </p>
        <a
          href={`mailto:salvi5375@gmail.com`}
          className={
            "rounded px-4 py-3 bg-primary border-0 ring-0 hover:bg-blue-500 duration-300 ease-in-out text-white"
          }
        >
          Get in touch!
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
