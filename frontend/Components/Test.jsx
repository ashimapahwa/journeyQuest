import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade } from "swiper/modules";

const packages = [
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    name: "Nangano Prefecture",
    country: "Japan",
    length: 7,
    price: 150000,
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-4.jpg",
    name: "Yosemite National Park",
    country: "Sierra Nevada, USA",
    length: 6,
    price: 130000,
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
    name: "Los Lances",
    country: "Tarifa, Spain",
    length: 4,
    price: 100000,
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
    name: "Goreme valley",
    country: "Turkey",
    length: 4,
    price: 110000,
  },
  {
    imgLink: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    name: "Saint ",
    length: 5,
    price: 160000,
  },
  {
    imgLink:
      "https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/04/forgotten-hero-who-brought-tawang-under-indian-union-to-be-honoured-1.jpg",
    name: "Tawang, Arunachal Pradesh, India",
    length: 2,
    price: 40000,
  },
  {
    imgLink:
      "https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/04/48360800-1.jpg",
    name: "Mawlynnong, Meghalaya, India",
    length: 2,
    price: 30000,
  },
];

const Test = () => {
  return (
    <div>
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        loop={true}
      >
        <SwiperSlide>
          {packages.map((slide) => (
            <img src={slide.imgLink} alt="" />
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
