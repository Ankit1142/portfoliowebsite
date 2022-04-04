import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import AnkitKumarResume from './AnkitKumarResume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span className="content">
          I am good in making responsive designs, and can build  <br />
          web apps that can bring a change in the society,
          <br />
          I am good in Data Structures and Algorithms and have  <br />
          quite good problem solving skills.
        </span>
        <a href={AnkitKumarResume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "12rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Languages"}
            detail={"C, C++, HTML, CSS, Javascript"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-4rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Web-Development"}
            detail={"React, Bootstrap, Material-ui,Nodejs, Express,MongoDB, Firebase"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "22rem", left: "12rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Others"}
            detail={ "Data Structures and Algorithms, OOP concepts, operating system" }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
