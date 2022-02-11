const lecturerRouter = require("express").Router();
const { LecturerController } = require("../controllers");

lecturerRouter.get("/", LecturerController.getAllLecturers);
lecturerRouter.get("/detail/:id", LecturerController.detailLecturer);
lecturerRouter.get("/search", LecturerController.searchLecturer);
lecturerRouter.post("/create", LecturerController.addLecturer);
lecturerRouter.put("/edit/:id", LecturerController.updateLecturer);
lecturerRouter.delete("/delete/:id", LecturerController.deleteLecturer);

module.exports = lecturerRouter;
