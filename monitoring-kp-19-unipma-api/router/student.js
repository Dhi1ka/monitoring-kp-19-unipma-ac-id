const studentRouter = require("express").Router();
const { StudentController } = require("../controllers");

// CRUD STUDENT
studentRouter.get("/", StudentController.getAllStudents);
studentRouter.get("/detail/:id", StudentController.detailStudent);
studentRouter.get("/search", StudentController.searchStudent);
studentRouter.post("/create", StudentController.createStudent);
studentRouter.put("/edit/:id", StudentController.editStudent);
studentRouter.delete("/delete/:id", StudentController.deleteStudent);

// AUTH STUDENT
studentRouter.post("/auth/register", StudentController.register);
studentRouter.post("/auth/login", StudentController.login);

module.exports = studentRouter;
