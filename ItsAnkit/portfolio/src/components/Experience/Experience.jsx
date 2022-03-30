import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <h1 style={{ color: darkMode ? "white" : "" }}>My Experience</h1>
      <h5>Music Seekho </h5>
      <h6>
        In this 2 month intern our goal was to build a completely working Music
        web app which
        <br />
         was aimed to create a platform where an environment for music
        learners can be build. <br />
        Teachers and students can resgister at the app and teachers can
        take the live and recorded
        <br />
         classes for the enrolled students.
        <br />
        here <span className="role"> my role </span> was mainly to build rest APIs and connecting
        the server to the firebase database.
      </h6>
    </div>
  );
};

export default Experience;

// <div className="experience" id='experience'>
//       <div className="achievement">
//         {/* darkMode */}
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
//         <span  style={{color: darkMode?'white':''}}>years </span>
//         <span>Experience</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
//         <span  style={{color: darkMode?'white':''}}>completed </span>
//         <span>Projects</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
//         <span  style={{color: darkMode?'white':''}}>companies </span>
//         <span>Work</span>
//       </div>
//     </div>
