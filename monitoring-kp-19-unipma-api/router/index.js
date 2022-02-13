const { Router } = require("express");
const router = Router();
const adminRouter = require("./admin");
const studentRouter = require("./student");
const lecturerRouter = require("./lecturer");
const companyRouter = require("./company");

router.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

router.use("/api/admin", adminRouter);
router.use("/api/students", studentRouter);
router.use("/api/lecturers", lecturerRouter);
router.use("/api/companies", companyRouter);

module.exports = router;
