const { Router } = require("express");
const router = Router();
const studentRouter = require("./student");
const lecturerRouter = require("./lecturer");

router.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

router.use("/students", studentRouter);
router.use("/lecturers", lecturerRouter);

module.exports = router;
