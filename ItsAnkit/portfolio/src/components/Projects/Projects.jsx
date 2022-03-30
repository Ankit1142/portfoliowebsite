import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Projects.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  className="projects">
      <span style={{ color: darkMode ? "white" : "" }}>My Projects</span>
      <div className="project1">
        <span>Online-Blog-Website using MERN stack </span>
        <br />
        <span>MONGODB, EXPRESS, REACT, NODE, MATERIAL-UI</span>
        <br />
        <span className="content">
          Created a fully functional and responsive BLOG-website using React
          library, Node and mongoDB as online database.This Web App allows the
          user to write their blog in different categories like
          music,college,poetry etc, and the other users can visit the blogs of
          any user but can edit only self created blogs.
        </span>
      </div>

      <div className="project1">
        <span>Real-Time-Chat Web-App </span>
        <br />
        <span>MONGODB, EXPRESS,Node.js, Socket.io , React</span>
        <br />
        <span className="content">
          Created a Real-Time chat online web-application using react in front
          end and Node.js as back-end technology, and using WebSocket API that
          makes the two way connection between the server and the user. Using
          this application users can join the online chat and can send and
          receive the message with no delay in time.
        </span>
      </div>

      <div className="project1">
        <span>Online-Text-Editor Web-App </span>
        <br />
        <span>HTML5, CSS3, JAVASCRIPT, REACT.JS, BOOTSTRAP</span>
        <br />
        <span className="content">
          Created a fully functional and responsive web-application using
          React.js library and bootstrap framework.This web app can perform
          different types of functions over the inserted text such as changing
          the text to upper and lower case,counting the number of words,what
          time it would take to read the whole text, clear the text and to
          manage the extra spaces between the text etc
        </span>
      </div>
    </div>
  );
};

export default Projects;
