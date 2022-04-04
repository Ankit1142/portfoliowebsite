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
    <div className="projects">
      <span style={{ color: darkMode ? "white" : "" }}>My Projects</span>
      <div className="project1">
        <span>Animal-Saver-Webapp using MERN stack </span>
        <br />
        <span>MONGODB, EXPRESS, REACT, NODE, MATERIAL-UI</span>
        <a href="https://github.com/Ankit1142?tab=repositories" target="_blank">(Github-repo)</a>
        <br />
    
        <span className="content">
        This app is actully a connection between people and the the NGOs that are working for the betterment of animals and takes care of them.
          <br />
          This is a fully functional and responsive webapp where users are
          allowed to post the picture of any injured animal in their
          locality,their location and can give the severity level of the injury
          and some short of details. 
          <br />
          Also for the better functioning of the
          work an algorithm is set so that most severe cases are shown first.
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
        <a href="https://github.com/Ankit1142/TEXT-MANAGER" target="_blank">(Github-repo)</a>
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
