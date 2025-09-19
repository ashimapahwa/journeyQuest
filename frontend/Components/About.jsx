import React from "react";
import "../Css/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";

const Swiper3 = styled(Swiper)`
  width: 60vw;
  height: 30vh;
`;
const SwiperSlide3 = styled(SwiperSlide)`
  width: 20vw;
`;

const About = () => {
  return (
    <>
      <section id="about">
        <h2>About Us</h2>
        <p>
         Journey Quest is a Mumbai-based Travel agency catering to the needs of the
          customers since 2000. National as well as International tour packages
          are available. Whether you want to go to forest or cultural
          destinations, hill stations or beach, snowy mountains or vast deserts,
          all of your wishes will be fulfilled in just one place. So, contact us
          to plan your vacations with us and we promise that those holidays will
          be the best memories of your life.
        </p>
      </section>
      <section id="testimonials">
        <div className="overlay-testimonials">
          <div className="testimonial-text">
            <h2>23,000 +</h2>
            <p>Happy customers and here's what they are saying about us.</p>
          </div>
          <Swiper3
            slidesPerView={2}
            modules={[Autoplay]}
            speed={1500}
            autoplay={{ delay: 2000 }}
            loop={true}
            spaceBetween={40}
          >
            {Array(6)
              .fill(1)
              .map(() => (
                <SwiperSlide3 className="testimonial-card">
                  <div className="profile-pic-container">
                    <img
                      src="person-circle.svg"
                      alt="Profile-pic"
                      className="profile-pic"
                    />
                    <div>
                      <h5 className="name">xyz</h5>
                      <p className="region">abcd</p>
                    </div>
                  </div>
                  <p className="review">
                   Best services provided with proper satisfaction
                  </p>
                </SwiperSlide3>
              ))}
          </Swiper3>
        </div>
      </section>
    </>
  );
};

export default About;
