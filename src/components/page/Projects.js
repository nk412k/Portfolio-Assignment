import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

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
    <div id='projects'>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROJECTS</strong>
          </h6>
          <table className="striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects && projects.map(project=>{
              return(
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.date}</td>
                <td>
                  <Link to={`/projects/${project._id}`} className="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              )})}           
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Project;
