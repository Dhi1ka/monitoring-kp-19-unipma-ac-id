const studentRouter = require("express").Router();
const { StudentController } = require("../controllers");

studentRouter.get("/all", StudentController.getAllStudents);
studentRouter.get("/detail/:id", StudentController.detailStudent);
studentRouter.get("/search", StudentController.searchStudent);
studentRouter.post("/add", StudentController.addStudent);
studentRouter.put("/update/:id", StudentController.updateStudent);
studentRouter.delete("/delete/:id", StudentController.deleteStudent);

module.exports = studentRouter;
