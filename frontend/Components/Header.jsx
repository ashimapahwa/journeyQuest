import React from "react";
import Navbar from "./Navbar";

const container = {
  height: "100vh",
  width: "98.8vw",
  background: "url(taj.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundAttachment: "fixed",
};

const overlay = {
  height: "100vh",
  width: "98.8vw",
  background: "rgba(0, 0, 0, 0.5)",
  position: "relative",
};

const header = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-45%)",
  color: "white",
  textAlign: "center",
};

function scroll() {
  document.getElementById("explore").scrollIntoView("smooth");
}

const Header = () => {
  return (
    <section style={container} id="home">
      <Navbar />
      <div style={overlay}></div>
      <header style={header}>
        <h1 style={{ fontSize: "3.5rem" }} className="mb-5">
          TRAVEL FAR
          DREAM BIG!!
        </h1>
        <p style={{ fontSize: "1.3rem" }}>
        “Discover the beauty of the world with us, where every trip is tailored just for you. From hidden gems off the beaten path to iconic landmarks that inspire awe, we are committed to making your travel dreams a reality. Pack your bags, and let’s embark on an adventure filled with unforgettable moments and incredible discoveries!”
        </p>
        <button className="btn btn-dark" onClick={scroll}>
          Explore More
        </button>
      </header>
    </section>
  );
};

export default Header;
