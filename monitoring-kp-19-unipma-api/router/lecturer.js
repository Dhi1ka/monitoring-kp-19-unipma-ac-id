const lecturerRouter = require("express").Router();
const { LecturerController } = require("../controllers");

lecturerRouter.get("/", LecturerController.getAllLecturers);
lecturerRouter.get("/detail/:id", LecturerController.detailLecturer);
lecturerRouter.get("/search", LecturerController.searchLecturer);
lecturerRouter.post("/create", LecturerController.createLecturer);
lecturerRouter.put("/edit/:id", LecturerController.editLecturer);
lecturerRouter.delete("/delete/:id", LecturerController.deleteLecturer);

module.exports = lecturerRouter;
