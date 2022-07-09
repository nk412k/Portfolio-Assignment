const express=require('express');
const projectController=require('../controllers/projects');
const router=express.Router();

router.get('/projects',projectController.getProjects);
router.get('/project/:projectId',projectController.getProject);

module.exports=router;