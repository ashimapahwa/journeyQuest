import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectCube } from "swiper/modules";
import "../Css/Explore.css";
import styled from "styled-components";

const Swiper1 = styled(Swiper)`
  width: 29vw;
  height: 75vh;
  background-position: center;
  background-size: cover;
  border-radius: 9px;
  margin-top: 7vh;
`;

const SwiperSlide1 = styled(SwiperSlide)`
  width: 29vw;
  height: 75vh;
  background-position: center;
  background-size: cover;
  border-radius: 9px;
`;

function handleButton() {
  document.getElementById("packages").scrollIntoView("smooth");
}

const data = [
  {
    imgLink:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847",
    heading: "Edinburgh",
    text: "Explore the city's majestic castles and fascinating history by joining our guided tour for an unforgettable journey through Scotland's capital.",
  },
  {
    imgLink:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158",
    heading: "New York",
    text: " Experience the energy and excitement of New York City from Times Square's dazzling lights to the serene beauty of Central Park.",
  },
  {
    imgLink:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
    heading: "Japan",
    text: "Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
  },
  {
    imgLink:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/49db1b5f-09f6-4433-be57-51687585600c",
    heading: "Florence",
    text: "Discover the fascinating beauty of this historic city by strolling through the rich cultural tapestry that makes Florence a timeless destination.",
  },
];

const Explore = () => {
  return (
    <section id="explore">
      <div className="content">
        <h2>Let's Travel The World Together!</h2>
        <p>
          Our tours are designed to transport you to the heart of the world's
          most captivating destinations, creating memories that will last a
          lifetime. You can uncover the hidden gems, iconic landmarks, and
          unique cultural treasures that make each destination special.
        </p>
        <button className="btn btn-primary" onClick={handleButton}>
          Explore Packages
        </button>
      </div>
      <Swiper1
        effect={"cube"}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
        }}
        cubeEffect={{
          shadow: false,
        }}
        speed={1000}
        loop={true}
      >
        {data.map((card) => (
          <SwiperSlide1>
            <img src={card.imgLink} alt={card.heading} className="cubeImage" />
            <div className="overlay-explore">
              <h2>{card.heading}</h2>
              <p>{card.text}</p>
            </div>
          </SwiperSlide1>
        ))}
      </Swiper1>
    </section>
  );
};

export default Explore;
