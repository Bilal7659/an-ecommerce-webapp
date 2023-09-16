import React from "react";
import "../Contact/ContactStyle.css";
import Footer from "../Footer/Footer";
import { MdOutgoingMail } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsFillTelephoneXFill } from "react-icons/bs";
import Area from "./Area";
export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <form action="https://formspree.io/f/xlekwazb" method="post">
            <h3>LEAVE US A MESSAGE</h3>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              autoComplete="off"
              cols="4"
              rows="8"
            ></textarea>
            <button
              className="btn"
              style={{
                borderRadius: "5px",
                width: "200px",
              }}
            >
              Send Message
            </button>
          </form>
          <div className="direct-contact">
            <h3 style={{ color: "#684f40" }}>… OR CONTACT US DIRECTLY</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
            <p>
              <span>
                <FaMapMarkerAlt
                  style={{
                    marginRight: "1rem",
                    fontSize: "18px",
                    color: "#fdb822",
                  }}
                />
              </span>
              Johny Bravo, Street Number, City
            </p>
            <p>
              <span>
                <BsFillTelephoneXFill
                  style={{
                    marginRight: "1rem",
                    fontSize: "18px",
                    color: "#fdb822",
                  }}
                />
              </span>
              0 800 500 55 123 465
            </p>
            <p>
              <span>
                <MdOutgoingMail
                  style={{
                    marginRight: "1rem",
                    fontSize: "22px",
                    color: "#fdb822",
                  }}
                />
              </span>
              info@bakerytheme.com
            </p>
            <div className="social-icons icons">
              <a href="https://facebook.com" className="social-icon facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Area />
      <Footer />
    </div>
  );
}
