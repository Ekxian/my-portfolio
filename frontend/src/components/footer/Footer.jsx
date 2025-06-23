import React from "react";
import { Link } from "react-scroll";

import "./footer.css";

import LOGO1 from "../../assets/LOGO1.png";
import LOGO2 from "../../assets/LOGO2.png";
import LOGO3 from "../../assets/LOGO3.png";

import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-dark text-center text-white mt-5 py-4">
      <div className="container ">
        <p className="border-bottom">
          <span className="fs-4">Eljon Tangalin</span>
          <br />
          <small>Aspiring Developer</small>
          <br />
          <small>eljontangalin@gmail.com</small>
        </p>

        <div>
          <small>
            <li className="d-flex justify-content-center">
              <ul>
                <Link
                  href=""
                  className="nav-item-css nav-link active text-white"
                  to="hero" // must match the name in the AboutMe section
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                >
                  Home
                </Link>
              </ul>
              <ul>
                <Link
                  href=""
                  className="nav-item-css nav-link active text-white"
                  to="about" // must match the name in the AboutMe section
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                >
                  About
                </Link>
              </ul>
              <ul>
                <Link
                  href=""
                  className="nav-item-css nav-link active text-white"
                  to="projects" // must match the name in the AboutMe section
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                >
                  Projects
                </Link>
              </ul>
              <ul>
                <Link
                  href=""
                  className="nav-item-css nav-link active text-white"
                  to="skills" // must match the name in the AboutMe section
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100} // adjust based on navbar height
                >
                  Skills
                </Link>
              </ul>
            </li>
          </small>
        </div>
        <div className="d-flex justify-content-center">
          <a
            href="https://www.facebook.com/TBNRej"
            target="_blank"
            className="nav-link active text-white"
          >
            <CiFacebook style={{ cursor: "pointer" }} size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/eljon-tangalin-5a53a0242/"
            target="_blank"
            className="nav-link active text-white"
          >
            <FaLinkedin className="mx-3" style={{ cursor: "pointer" }} />
          </a>
          <a
            href="https://github.com/Ekxian"
            target="_blank"
            className="nav-link active text-white"
          >
            <FaGithub style={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
