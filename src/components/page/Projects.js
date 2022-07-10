import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import './project.css';

const Project = () => {
  const [projects,setProjects]=useState([])
    const fetchProjectHandler = useCallback(() => {
      fetch("http://localhost:8080/projects")
        .then((res) => {
          return res.json();
        })
        .then((resData) => {
          setProjects(resData.projects);
        });
    },[]);

    useEffect(() => {
      fetchProjectHandler();
    },[fetchProjectHandler]);

  return (
    <div id="projects">
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROJECTS</strong>
          </h6>
          <div className="gridd">
          {projects &&
            projects.map((project) => {
              return (
                <Link
                  className="card"
                  key={project.title}
                  to={`/projects/${project._id}`}
                >
                  <header className="card__header">
                    <p className="project__title">{project.title}</p>
                  </header>
                  <div className="card__image">
                    <img src={`${project.imageUrl}`} alt={project.title} />
                  </div>
                </Link>
              )
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
