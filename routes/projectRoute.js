const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

// router
const router = express.Router();

router.use(requireAuth);

// GET all projects
router.get("/", getAllProjects);

// GET a single project
router.get("/:id", getSingleProject);

// POST a new project
router.post("/", postProject);

// DELETE a project
router.delete("/:id", deleteProject);

// UPDATE a project
router.patch("/:id", updateProject);

module.exports = router;
