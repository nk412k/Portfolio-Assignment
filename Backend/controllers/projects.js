
const Project = require("../models/project");

exports.getProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      res
        .status(200)
        .json({
          projects: projects,
          message: "Fetched tasks successfully",
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProject = (req, res, next) => {
  const projectId=req.params.projectId;
  Project.findById(projectId)
    .then((project) => {
      res.status(200).json({
        project: project,
        message: "Fetched tasks successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


