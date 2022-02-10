const { Router } = require("express");
const router = Router();
const studentRouter = require("./student");
const lecturerRouter = require("./lecturer");
const companyRouter = require("./company");

router.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

router.use("/students", studentRouter);
router.use("/lecturers", lecturerRouter);
router.use("/companies", companyRouter);

module.exports = router;
