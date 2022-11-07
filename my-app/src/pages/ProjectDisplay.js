import React from 'react'
import {useParams} from "react-router-dom"
import {projectList} from '../helpers/ProjectLists'
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id]
  return (
    <div className= 'project'>
        <h1>{project.name}</h1>
        <a href={project.Link}><img src={project.image}/></a>
    <p> <b>Skills:</b> {project.Skills}</p>
     <p ><b>About:</b> {project.About}</p> 
    
    </div>
  )
}

export default ProjectDisplay