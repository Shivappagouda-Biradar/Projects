import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-img" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Placements Achievements & Statistics</h2>
        <p>
          Over two hundred prospective recruiters have hired more than 4,000
          students from our campuses over the last few years, which has been an
          outcome of a very precise placement process adopted by the Student
          Career Advisory and Placement Support at Jain College of Engineering..
        </p>
        <p>
          JCE E Connect Platform enables the student community to be able to
          learn without the bounds of the classroom. The E Connect Platform is
          created with a vision to facilitate remote learning.
        </p>
      </div>
    </div>
  );
};

export default About;
