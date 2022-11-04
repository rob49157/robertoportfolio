import React from 'react'

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubInIcon from "@material-ui/icons/GitHub";
import '../styles/Footer.css'


function Footer() {
  return (
    <div className="footer">
    <div className="socialMedia">
        {" "}
        <GithubInIcon/>
        <LinkedInIcon/>
        <FacebookIcon/>
        <TwitterIcon/>
    </div>
    <p> &copy; 2022 robertoportfolio.com</p>
    </div>
        
  )
}

export default Footer