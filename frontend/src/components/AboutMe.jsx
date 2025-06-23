import React from "react";
import { motion } from "framer-motion";

import "./component.css";

import ME2 from "../assets/ME2.png";

const AboutMe = () => {
  return (
    <div className="container mt-5 ">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="section-item-css pt-5">&lt; About Me /&gt;</h4>
      </motion.div>

      <div className="row justify-content-center align-items-center mt-5 p-5">
        <motion.div
          className="col-12 col-md-6 align-self-center"
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ translateY: -5 }}
        >
          <h1 className=" border-start border-5 border-primary py-3 ">
            <i>"Aspera Ad Astra"</i>
          </h1>
          <p className="bg-secondary-subtle p-3 ms-3">
            <small>
              Hi, I’m Eljon. An aspiring developer that wants to enter the IT
              industry! I truly enjoy making projects that can benefit everyone!
              <br />
              Throughout my academic journey. I’ve always been at the top of my
              class. And I have recently graduated as Summa Cum Laude |
              Valedictorian. I’m often cooped up inside my room—studying.
              <br />
              Perhaps I should touch some grass?
            </small>
          </p>
        </motion.div>
        <motion.div
          className="col-12 col-md-4 d-none d-md-block text-center"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ translateY: -10 }}
        >
          <img src={ME2} alt="" height={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
