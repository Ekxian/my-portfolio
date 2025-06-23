import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import Navbar from "../navbar/Navbar";

import ME1 from "../../assets/ME1.png";
import LOGO1 from "../../assets/LOGO1.png";
import LOGO2 from "../../assets/LOGO2.png";

import "./hero.css";

const Hero = () => {
  return (
    <div className="w-100">
      <Navbar />

      {/* desc */}
      <div
        className="container"
        style={{ minHeight: "100vh", paddingTop: "200px" }}
      >
        <div className="row ms-5">
          <motion.div
            className="col-12 col-md-8 col-lg-6"
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
          >
            <p>
              <span style={{ color: "#0034d1" }}>title:</span> Personal
              Portfolio
            </p>
            <p style={{ color: "#0034d1" }}>/welcome:</p>
            <h1>
              <b className="name-item-css">Eljon . Tangalin</b>
            </h1>
            <p>
              var <span style={{ color: "#0034d1" }}>role</span> ={" "}
              <ReactTyped
                style={{ color: "#0034d1" }}
                strings={[
                  "Aspiring Mulesoft Developer",
                  "Aspiring Software Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>

            <div className="border-start border-2 border-primary">
              <div className="ms-2">
                <p style={{ color: "#0034d1" }}>/**</p>
                <p>
                  I build seamless integrations and scalable systems using
                  modern technologies. Specializing in crafting smart solutions
                  to real-world challenges.
                </p>
                <p style={{ color: "#0034d1" }}> **/</p>
              </div>
            </div>
            <div className="d-flex">
              <motion.div
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <a href="https://github.com/Ekxian" target="_blank">
                  <img
                    src={LOGO1}
                    className="me-2"
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ translateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com/in/eljon-tangalin-5a53a0242/"
                  target="_blank"
                >
                  <img src={LOGO2} style={{ cursor: "pointer" }} alt="" />
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-md-4 d-none d-md-block align-self-center"
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src={ME1} alt="" width={500} className="rounded img-fluid" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
