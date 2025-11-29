import { useEffect, useRef, useState } from "react";
import Logo1 from "../../images/logo-2.png";
import Logo2 from "../../images/logo-3.png";
import "./LogoSlider.css";

const baseLogos = [Logo1, Logo2, Logo1, Logo2, Logo1, Logo2];

// make strip long so it can scroll a lot
const REPEAT_COUNT = 10;
const infiniteLogos = Array.from(
  { length: baseLogos.length * REPEAT_COUNT },
  (_, i) => baseLogos[i % baseLogos.length]
);

export default function LogoSlider() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let position = 0; // how far we shifted row
    let logicalIndex = 0; // how many “steps” we moved
    const TIME = 2200; // pause between jumps (2.2s)
    const CENTER_OFFSET = 3; // which logo looks “center”

    const interval = setInterval(() => {
      const firstSlide = track.children[0];
      if (!firstSlide) return;

      // width of one logo + margin-right
      const slideWidth = firstSlide.offsetWidth;
      const styles = window.getComputedStyle(firstSlide);
      const marginRight = parseFloat(styles.marginRight) || 0;
      const STEP = slideWidth + marginRight;

      // move row one step left
      position -= STEP;

      const trackWidth = track.scrollWidth;
      const wrapperWidth = wrapper.clientWidth;

      // if we went too far (all logos out) – jump back to start
      if (Math.abs(position) > trackWidth - wrapperWidth) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;

      // update which logo is “center”
      logicalIndex = (logicalIndex + 1) % infiniteLogos.length;
      const active = (logicalIndex + CENTER_OFFSET) % infiniteLogos.length;
      setActiveIndex(active);
    }, TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-slider-wrapper" ref={wrapperRef}>
      <div className="logo-slider-track" ref={trackRef}>
        {infiniteLogos.map((logo, index) => (
          <div
            key={index}
            className={`logo-slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
