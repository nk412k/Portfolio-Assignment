import About from "./About";
import Education from "./Educations";
import Profile from "./Profile";
import Skills from "./Skills";
import React from "react";
import Project from "./Projects";
import NavBar from "../navbar/navbar";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <div id='home' className="container">
        <div className="row">
          <div className="col s12 m3">
            <Profile />
          </div>
          <div className="col s12 m9">
            <About />
            <Skills/>
            <Education />
            <Project/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
