const companyRouter = require("express").Router();
const { CompanyController } = require("../controllers");

// CRUD COMPANY
companyRouter.get("/", CompanyController.getAllCompanies);
companyRouter.get("/detail/:id", CompanyController.detailCompany);
companyRouter.get("/search", CompanyController.searchCompany);
companyRouter.post("/create", CompanyController.createCompany);
companyRouter.put("/edit/:id", CompanyController.editCompany);
companyRouter.delete("/delete/:id", CompanyController.deleteCompany);

// AUTH COMPANY
companyRouter.post("/auth/register", CompanyController.register);
companyRouter.post("/auth/login", CompanyController.login);

module.exports = companyRouter;
