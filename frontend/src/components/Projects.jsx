import React from "react";
import { motion } from "framer-motion";

import "./component.css";

import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rescue Track",
      projectType: "Undergraduate Thesis",
      appType: "Android App & MERN",
      image: P1,
      link: "",
    },
    {
      id: 2,
      title: "M'FUNada",
      projectType: "Comissioned Project",
      appType: "React + Vite",
      image: P2,
      link: "https://m-funada-eij11s-projects.vercel.app/",
    },
  ];
  return (
    <div className="mt-5 bg-dark">
      <motion.div
        className="container"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center">
          <h4
            className="section-item-css text-white  pt-5"
            style={{ color: "#0034d1" }}
          >
            &lt; Projects /&gt;
          </h4>
        </div>

        <div className="row justify-content-center mt-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="card bg-transparent h-100 shadow border-0 position-relative"
                style={{ width: "18rem", cursor: "pointer" }}
              >
                <a href={project.link} target="_blank">
                  <img
                    src={project.image}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "18rem",
                      objectFit: "cover",
                    }}
                    alt={project.title}
                  />
                </a>
                <p className="text-white">
                  <span className="fs-5">{project.title}</span>
                  <br />
                  <small>
                    <span className="bg-white text-dark rounded-pill px-2">
                      {project.projectType}
                    </span>
                    <br /> {project.appType}
                  </small>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
