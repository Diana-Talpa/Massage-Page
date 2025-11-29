import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./ReviewsSlider.css";

function ReviewsSlider() {
  return (
    <>
      {" "}
      <div className="review-slider-wrapper">
        <div className="slide-up">
          <h1 className="review-title">Klientu Atsiliepimai</h1>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="review-card">
                <p>“Labai patiko masažas, tikrai rekomenduoju!”</p>
                <strong>– Aistė</strong>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="review-card">
                <p>“Puikus specialistas ir labai malonus bendravimas.”</p>
                <strong>– Tomas</strong>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <p>“Po masažo dingo nugaros skausmai, sugrįšiu dar.”</p>
                <strong>– Laura</strong>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default ReviewsSlider;
