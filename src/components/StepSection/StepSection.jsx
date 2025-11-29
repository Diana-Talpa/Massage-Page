import { useEffect } from "react";
import Search from "../../images/search-bar.png";
import Note from "../../images/notes.png";
import Calendar from "../../images/calendar.png";
import "./StepSection.css";

function StepSection() {
  // SIMPLE SCROLL REVEAL
  useEffect(() => {
    const steps = document.querySelectorAll(".step");

    const reveal = () => {
      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();

        // When element enters the viewport
        if (rect.top < window.innerHeight - 100) {
          step.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // run on page load

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="steps-wrapper">
      <ol className="rotated-list">
        <li className="step">
          <div className="circle">
            <img className="step-icon-1" src={Search} alt="Paieškos ikona" />
          </div>
          <div>
            Zingsnis 1<p>Pasirinkite procedūrą</p>
          </div>
        </li>

        <li className="step middle-step">
          <div className="circle">
            <img className="step-icon-2" src={Note} alt="Užrašų ikona" />
          </div>
          <div>
            Zingsnis 2<p>Registruokitės</p>
          </div>
          <div className="red-line"></div>
        </li>

        <li className="step">
          <div className="circle">
            <img
              className="step-icon-3"
              src={Calendar}
              alt="Kalendoriaus ikona"
            />
          </div>
          <div>
            Zingsnis 3<p>Atvykite į procedūrą</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default StepSection;
