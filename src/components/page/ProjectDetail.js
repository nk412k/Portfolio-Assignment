import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/navbar2";
import './projectDetail.css';

const ProjectDetail = () => {
  const projectId = useParams().projectId;
  const [project, setProject] = useState({});
  const fetchProjectHandler = useCallback(() => {
    fetch("http://localhost:8080/project/" + projectId)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setProject(resData.project);
      });
  }, []);

  useEffect(() => {
    fetchProjectHandler();
  }, [fetchProjectHandler]);
  console.log(project);
  return (
    <React.Fragment>
      <NavBar />
      <section className="section main">
        <img src={project.imageUrl} alt={project.title}></img>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h6>Made on {project.date}</h6>
        <h4>
          <a href={project.website} target="_blank">
            Live Project
          </a>
        </h4>
      </section>
    </React.Fragment>
  );
};

export default ProjectDetail;
