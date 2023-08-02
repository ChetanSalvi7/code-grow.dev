import React, { lazy, useEffect, useRef } from "react";
import gsap from "gsap";

const LogClouds = lazy(() => import("./pages/LogClouds"));
const Prices = lazy(() => import("./pages/Prices"));
const Information = lazy(() => import("./pages/Information"));
const Footer = lazy(() => import("./pages/Footer"));
const HeroSection = lazy(() => import("./pages/HeroSection"));
const Navbar = lazy(() => import("./pages/Navbar"));
const WhoAmI = lazy(() => import("./pages/WhoAmI"));
const SocialLinks = lazy(() => import("./pages/SocialLinks"));
const ContactSection = lazy(() => import("./pages/ContactSection"));

const Loader = lazy(() => import("./component/Loader"));

function App() {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0.1,
      });
    });

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, [cursorRef]);
  useEffect(() => {
    const handleContextMenu = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App overflow-x-hidden select-none">
      <div
        className={
          "hidden lg:block w-8 h-8 mouseCursor opacity-0 pointer-events-none" +
          " rounded-full border-2 border-green-600 ring ring-green-200 ring-opacity-50 z-[9999]" +
          " fixed "
        }
        ref={cursorRef}
      />
      <Navbar />
      <Loader>
        code-<span className={"text-primary"}>grow.dev</span>
      </Loader>
      <HeroSection />
      <WhoAmI />
      <Information />
      <Prices />
      <LogClouds />
      <ContactSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
