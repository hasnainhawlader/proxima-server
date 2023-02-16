const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");

//router
const router = express.Router();

//Get all projects

router.get("/", getAllProjects);

//get single projects

router.get("/:id", getSingleProject);

// delete a project

router.delete("/:id", deleteProject);

// update a project

router.patch("/:id", updateProject);

// post a project

router.post("/", postProject);

module.exports = router;
