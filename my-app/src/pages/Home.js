import React from 'react'
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="about">
        <h2>Hi, My Name is Roberto</h2>
        <div className="prompt">
          <p> A Software Developer with a passion for learrning and creating. </p>

        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, React Native, NPM, Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Django, Rails, ExpressJS, GraphQl, ApolloServer, MySQL, MongoDB, REST API</span>
          </li>
          <li className="item">
            <h2>Lenguages</h2>
            <span>JavaScript, Java, Python, Ruby</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home