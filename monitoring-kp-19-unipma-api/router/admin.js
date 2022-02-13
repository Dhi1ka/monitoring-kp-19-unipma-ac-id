const adminRouter = require("express").Router();
const { AdminController } = require("../controllers");

// CRUD admin
adminRouter.get("/", AdminController.getAllAdmins);
adminRouter.get("/detail/:id", AdminController.detailAdmin);
adminRouter.get("/search", AdminController.searchAdmin);
adminRouter.post("/create", AdminController.createAdmin);
adminRouter.put("/edit/:id", AdminController.editAdmin);
adminRouter.delete("/delete/:id", AdminController.deleteAdmin);

// AUTH admin
adminRouter.post("/auth/register", AdminController.register);
adminRouter.post("/auth/login", AdminController.login);

module.exports = adminRouter;
