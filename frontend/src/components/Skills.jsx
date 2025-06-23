import React from "react";
import { motion } from "framer-motion";

import "./component.css";

import R11 from "../assets/R11.png";
import R12 from "../assets/R12.png";
import R13 from "../assets/R13.png";
import R14 from "../assets/R14.png";
import R15 from "../assets/R15.png";
import R16 from "../assets/R16.png";
import R17 from "../assets/R17.png";
import R18 from "../assets/R18.png";
import R21 from "../assets/R21.png";
import R22 from "../assets/R22.png";
import R23 from "../assets/R23.png";
import R24 from "../assets/R24.png";
import R25 from "../assets/R25.png";
import R26 from "../assets/R26.png";
import R27 from "../assets/R27.png";
import R28 from "../assets/R28.png";
import R31 from "../assets/R31.png";
import R32 from "../assets/R32.png";
import R33 from "../assets/R33.png";

const Skills = () => {
  const skills = [
    { id: 1, title: "HTML", image: R11 },
    { id: 2, title: "CSS", image: R12 },
    { id: 3, title: "JS", image: R13 },
    { id: 4, title: "REACT", image: R14 },
    { id: 5, title: "MONGO DB", image: R15 },
    { id: 6, title: "EXPRESS JS", image: R16 },
    { id: 7, title: "NODE JS", image: R17 },
    { id: 8, title: "BOOTSTRAP", image: R18 },
    { id: 9, title: "TAILWIND", image: R21 },
    { id: 10, title: "NPM", image: R22 },
    { id: 11, title: "ANDROID STUDIO", image: R23 },
    { id: 12, title: "JAVA", image: R24 },
    { id: 13, title: "FIREBASE", image: R25 },
    { id: 14, title: "MULESOFT", image: R26 },
    { id: 15, title: "FIGMA", image: R27 },
    { id: 16, title: "GITHUB", image: R28 },
    { id: 17, title: "MULESOFT", image: R31 },
    { id: 18, title: "FIGMA", image: R32 },
    { id: 19, title: "GITHUB", image: R33 },
  ];

  return (
    <div className="">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="section-item-css pt-5 mb-5" style={{ color: "#0034d1" }}>
          &lt; Skills /&gt;
        </h4>
      </motion.div>

      <div className="skills-wrapper d-flex flex-wrap justify-content-center gap-4 px-5">
        {skills.map((item) => (
          <motion.div
            key={item.id}
            className="skill-card text-center text-white bg-dark bg-opacity-75"
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.1 }}
          >
            <div className="icon-box">
              <img src={item.image} alt={item.title} className="skill-icon" />
            </div>
            <p className="p-title mb-0">
              <small>{item.title}</small>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
