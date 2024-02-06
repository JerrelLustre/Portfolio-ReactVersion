// GSAP
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Hooks
import { useEffect,useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationContainer({ children }) {
  // State for page loading status
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Effect to set page as loaded once component mounts
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <>
      {children}
      {isPageLoaded && <AnimateElements />}
    </>
  );
}

export function AnimateElements() {
  let animatedElements = gsap.utils.toArray(".genericAnimation");
  // Animation
  useGSAP(() => {
    animatedElements.forEach((element) => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
        },
      });

      timeline.from(element, {
        opacity: 0,
        duration: 0.5,
        y: 100,
      });

      timeline.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      });
    });
  });

  return;
}
