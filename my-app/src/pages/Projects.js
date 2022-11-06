import React from "react";
import ProjectItem from "../components/ProjectItem";
import Doctoreview from "../assets/doctorpage.PNG";
import Maxpage from "../assets/maxpage.PNG";
import Marketapp from "../assets/reactcrypto.PNG";
import BookSearch from "../assets/booksearch.PNG";
import Calendar from "../assets/redcalendar.PNG";
import bikeadventure from "../assets/bikeadventure.png";
import NoteTaker from "../assets/notetakerpic.PNG";
import Blog from "../assets/techblogpic.PNG";
import Password from "../assets/passgenpic.PNG";
import { projectList } from "../helpers/ProjectLists";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        {projectList.map((projects, idx) => {
          return <ProjectItem id={idx} name={projects.name} image={projects.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
