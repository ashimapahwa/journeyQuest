import React from "react";

import { LiaCopyright } from "react-icons/lia";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      
      
      <div className="copyrights">
        <p>
          <LiaCopyright />
          2000 Journey quest Pvt. Ltd.
        </p>
        <p> All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
