const companyRouter = require("express").Router();
const { CompanyController } = require("../controllers");

companyRouter.get("/", CompanyController.getAllCompanies);
companyRouter.get("/detail/:id", CompanyController.detailCompany);
companyRouter.get("/search", CompanyController.searchCompany);
companyRouter.post("/create", CompanyController.createCompany);
companyRouter.put("/edit/:id", CompanyController.editCompany);
companyRouter.delete("/delete/:id", CompanyController.deleteCompany);

module.exports = companyRouter;
