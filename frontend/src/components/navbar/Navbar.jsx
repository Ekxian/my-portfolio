import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "./navbar.css";

import LOGO from "../../assets/ej2.png";

const Navbar = () => {
  return (
    <nav className="navbar-top navbar navbar-expand-lg position-absolute fixed-top w-100 mt-3">
      <div className="container bg-dark px-5 rounded-pill">
        <img src={LOGO} alt="" width={80} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
            <motion.li
              className="nav-item-css nav-item me-4"
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="nav-link active text-white "
                style={{ cursor: "pointer" }}
                to="hero" // must match the name in the AboutMe section
                smooth={true}
                duration={500}
                spy={true}
                offset={-100} // adjust based on navbar height
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              className="nav-item-css nav-item me-4"
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
                to="about" // must match the name in the AboutMe section
                smooth={true}
                duration={500}
                spy={true}
                offset={-100} // adjust based on navbar height
              >
                About
              </Link>
            </motion.li>
            <motion.li
              className="nav-item-css nav-item me-4"
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
                to="projects" // must match the name in the AboutMe section
                smooth={true}
                duration={500}
                spy={true}
                offset={-100} // adjust based on navbar height
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              className="nav-item-css nav-item me-4"
              whileHover={{ translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                className="nav-link active text-white"
                style={{ cursor: "pointer" }}
                to="skills" // must match the name in the AboutMe section
                smooth={true}
                duration={500}
                spy={true}
                offset={-100} // adjust based on navbar height
              >
                Skills
              </Link>
            </motion.li>
          </ul>
          <button
            className="d-none btn btn-light rounded-pill px-3"
            type="submit"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
