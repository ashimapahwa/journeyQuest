import React from "react";
import Header from "./Components/Header";
import Explore from "./Components/Explore";
import Packages from "./Components/Packages";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
// import Test from "./Components/Test";

const App = () => {
  return (
    <>
      <Header />
      <Explore />
      <Packages />
      <About />
      <Contact />
      <Footer />
      {/* <Test /> */}
    </>
  );
};

export default App;
