const lecturerRouter = require("express").Router();
const { LecturerController } = require("../controllers");

lecturerRouter.get("/all", LecturerController.getAllLecturers);
lecturerRouter.post("/add", LecturerController.addLecturer);
lecturerRouter.delete("/delete/:id", LecturerController.deleteLecturer);
lecturerRouter.put("/update/:id", LecturerController.updateLecturer);
lecturerRouter.get("/detail/:id", LecturerController.detailLecturer);
lecturerRouter.get("/search", LecturerController.searchLecturer);

module.exports = lecturerRouter;
