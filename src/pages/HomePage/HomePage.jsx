import "./HomePage.css";
import Video from "../../images/massage.mp4";
import { useEffect } from "react";
import SelectForm from "../../components/SelectForm/SelectForm";
import StepSection from "../../components/StepSection/StepSection";
import TopProceduresSection from "../../components/TopProceduresSection/TopProceduresSection";
import Articles from "../../components/Articles/Articles";
import About from "../../components/About/About";
import ReviewsSlider from "../../components/ReviewsSlider/ReviewsSlider";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  useEffect(() => {
    const spans = document.querySelectorAll(".slide-span");

    const reveal = () => {
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          span.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const reveal = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="home-page-container">
      <main>
        <section className="hero-section">
          <div className="hero-section">
            <video
              className="video-massage"
              src={Video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>

        <section className="form-section">
          <div className="on-top-form appear-scale ">
            <h1>Tavo kūnas vertas dėmesio – padovanok jam sveikatą!</h1>
          </div>
          <SelectForm />
        </section>

        <section className="steps-section">
          <StepSection />
        </section>

        <section className="registration-section">
          <div className="registracija-numeris fade-in">
            <span className="slide-span">Registracija</span> +37065508864
          </div>
        </section>

        <section className="top-procedures-section">
          <TopProceduresSection />
        </section>

        <section className="articles-section">
          <Articles />
        </section>

        <section className="about-section">
          <About />
        </section>

        <section className="reviews-section">
          <ReviewsSlider />
        </section>

        <section className="partners-section">
          <LogoSlider />
        </section>

        <section className="footer-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
