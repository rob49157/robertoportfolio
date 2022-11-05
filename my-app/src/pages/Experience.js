import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004-2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Centennial HighSchool, Roswell GA</h3>
        <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008-Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Brilliant Cleaning Manager</h3>
        <p> Work Experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
        <p> Helped a Senior Developer with Full Stack projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Georgia Institute Of Technology</h3>
        <p> Full Stack Developer Bootcamp Program</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <p> Acquiring new clients and developing complex projects to meet their bussiness needs</p>
        </VerticalTimelineElement>
      
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
