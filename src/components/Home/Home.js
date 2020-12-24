import React from 'react';
import AboutMeCard from "./AboutMeCard";
import ProjectCard from "../Projects/ProjectCard"
import "./Home.css"
import Navbar from '../Navbar/Navbar';

import Beckman from "../Data/login.png"
import Amazon from "../Data/amazon_checker.png"


import data from "../Data/info.json"


export default class Home extends React.Component{

  render(){
    return(
      <div>
        <Navbar />
        <div className="website-wrapper">
          <h4 className="about-me-title">About Me</h4>
            <AboutMeCard info = {data.AboutMe}/>
          <h4 className="projects-title">Projects</h4>
            <ProjectCard info = {data.BeckmanApp} image = {Beckman}/>
            <ProjectCard info = {data.AmazonChecker} image = {Amazon}/>
        </div>
      </div>
    )
  }  
}

