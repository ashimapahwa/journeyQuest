import React, { useState } from "react";
import axios from "axios";
import { FaRegBuilding } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "../Css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit-form", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section id="contact">
      <h2 className="h1 fw-normal">We are always here to help you</h2>
      <p>Book your appointments now</p>
      <div className="grid">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              name="message"
              placeholder="Your queries"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
        <div className="contact-info">
          <div className="info-card1 info-card">
            <div className="logo">
              <FaRegBuilding className="icon" />
            </div>
            <div className="info">
              <h5>Head Office</h5>
              <p>
                Abc Street, #12, Ofiice No.- 14,
                <br /> Mumbai, Maharashta
              </p>
            </div>
          </div>
          <div className="info-card2 info-card">
            <div className="logo">
              <IoCall className="icon" />
            </div>
            <div className="info">
              <h5>Phone numbers</h5>
              <p>
                +91 98338-93838
                <br />
                +91 83738-83737
              </p>
            </div>
          </div>
          <div className="info-card3 info-card">
            <div className="logo">
              <CiMail className="icon" />
            </div>
            <div className="info">
              <h5>Email Addresses</h5>
              <p>
                info@Wanderers.com
                <br />
                info@Wandererservices.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
