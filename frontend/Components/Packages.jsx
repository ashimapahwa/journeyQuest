import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "../Css/Packages.css";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoIosPricetags } from "react-icons/io";

const Swiper2 = styled(Swiper)`
  width: 98vw;
`;
const SwiperSlide2 = styled(SwiperSlide)``;

const packages = [
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    name: "Nangano Prefecture",
    country: "Japan",
    length: 7,
    price: "1,50,000",
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-4.jpg",
    name: "Yosemite National Park",
    country: "Sierra Nevada, USA",
    length: 6,
    price: "1,30,000",
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
    name: "Los Lances",
    country: "Tarifa, Spain",
    length: 4,
    price: "1,00,000",
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
    name: "Goreme valley",
    country: "Turkey",
    length: 4,
    price: "1,10,000",
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    name: "Saint Antonien",
    country: "Switzerland",
    length: 5,
    price: "1,60,000",
  },
  {
    imgLink:
      "https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/04/forgotten-hero-who-brought-tawang-under-indian-union-to-be-honoured-1.jpg",
    name: "Tawang",
    country: "Arunachal Pradesh,India",
    length: 2,
    price: "40,000",
  },
  {
    imgLink:
      "https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/04/48360800-1.jpg",
    name: "Mawlynnong",
    country: "Meghalaya,India",
    length: 2,
    price: "30,000",
  },
];

const Packages = () => {
  const [bgImage, setBgImage] = useState(
    "https://assets.codepen.io/3685267/timed-cards-2.jpg"
  );
  function handleSlideChange(swiper) {
    const activeIndex = (swiper.activeIndex + 1) % 7;
    const data = swiper.slides[activeIndex].dataset.link;
    setBgImage(data);
    console.log(bgImage);
  }

  return (
    <section id="packages">
      <img src={bgImage} alt="" />
      <div className="package-overlay"></div>
      <Swiper2
        effect={"coverflow"}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        speed={1000}
        slidesPerView={3}
        spaceBetween={60}
        className="swiper2"
        onSlideChange={handleSlideChange}
      >
        {packages.map((slide) => (
          <>
            <SwiperSlide2 className="swiper-slide2" data-link={slide.imgLink}>
              <img
                src={slide.imgLink}
                alt="Loading...."
                className="packages-background"
              />
              <div className="details">
                <h3>{slide.name}</h3>
                <p>
                  <FaLocationDot /> {slide.country}
                </p>
                <p>
                  <GoClockFill /> {slide.length} days
                </p>
                <p>
                  <IoIosPricetags /> {slide.price} INR
                </p>
              </div>
            </SwiperSlide2>
          </>
        ))}
      </Swiper2>
    </section>
  );
};

export default Packages;
