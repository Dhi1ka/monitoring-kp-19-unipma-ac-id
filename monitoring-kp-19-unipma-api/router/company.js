const companyRouter = require("express").Router();
const { CompanyController } = require("../controllers");

companyRouter.get("/all", CompanyController.getAllCompanies);
companyRouter.post("/add", CompanyController.addCompany);
companyRouter.delete("/delete/:id", CompanyController.deleteCompany);
companyRouter.put("/update/:id", CompanyController.updateCompany);
companyRouter.get("/detail/:id", CompanyController.detailCompany);
companyRouter.get("/search", CompanyController.searchCompany);

module.exports = companyRouter;
