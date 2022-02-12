const lecturerRouter = require("express").Router();
const { LecturerController } = require("../controllers");

// CRUD LECTURER
lecturerRouter.get("/", LecturerController.getAllLecturers);
lecturerRouter.get("/detail/:id", LecturerController.detailLecturer);
lecturerRouter.get("/search", LecturerController.searchLecturer);
lecturerRouter.post("/create", LecturerController.createLecturer);
lecturerRouter.put("/edit/:id", LecturerController.editLecturer);
lecturerRouter.delete("/delete/:id", LecturerController.deleteLecturer);

// AUTH LECTURER
lecturerRouter.post("/auth/register", LecturerController.register);
lecturerRouter.post("/auth/login", LecturerController.login);

module.exports = lecturerRouter;
