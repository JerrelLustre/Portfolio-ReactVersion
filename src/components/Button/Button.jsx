import { Link } from "react-router-dom";
import { useRef } from "react";
// Plugins
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Link as ScrollLink } from "react-scroll";

// Images
import selector from "../../assets/svg/selector-dark.svg";

export default function Button({ route, label, anchor }) {
  const baseClasses =
    "btn inline-block py-3 px-6 bg-white text-black text-base sm:text-xl font-oswald cursor-pointer";
  let btnElement = "";
  if (anchor) {
    // Render an anchor element
    btnElement = (
      <ScrollLink
        to={route}
        className={`${baseClasses}`}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {label}
      </ScrollLink>
    );
  } else {
    // Render a Link element
    btnElement = (
      <Link to={route} className={`${baseClasses}`}>
        {label}
      </Link>
    );
  }

  // Animation

  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const duration = 0.2;

  const applyAnimation = (opacity, xPos, yPos, outlineWidth) =>
    contextSafe(
      () => {
        let timeline = gsap.timeline();
        timeline.to(
          ".selector",
          { opacity, x: xPos, y: yPos, duration },
          "start"
        );
        timeline.to(".btnContainer", { outlineWidth, duration }, "start");
      },
      { scope: container }
    );

  const btnAnimationForward = applyAnimation(1, "33%", "-35%", "5");
  const btnAnimationReverse = applyAnimation(0, "100%", "-100%", "0");

  return (
    <div ref={container}>
      <div
        className="btnContainer relative w-fit outline-white outline-offset-2 outline outline-0 border-0"
        onMouseEnter={btnAnimationForward}
        onMouseLeave={btnAnimationReverse}
      >
        {btnElement}
        <img
          src={selector}
          className="selector opacity-0 inline-block  h-8 absolute right-0 top-0 translate-x-[100%] translate-y-[-100%] pointer-events-none"
        />
      </div>
    </div>
  );
}
