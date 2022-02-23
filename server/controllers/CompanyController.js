const { company } = require("../models");

class CompanyController {
  static async getAllCompanies(req, res) {
    try {
      let dataCompanies = await company.findAll({});

      res.status(200).json(dataCompanies);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailCompany(req, res) {
    try {
      const id = +req.params.id;

      let result = await company.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Company with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchCompany(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createCompany(req, res) {
    try {
      const { companyId, name, email, password, confirm_password } = req.body;

      let result = await company.create({
        companyId,
        name,
        email,
        password,
        confirm_password,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editCompany(req, res) {
    try {
      const id = +req.params.id;
      const { companyId, name, email, password, confirm_password } = req.body;

      let result = await company.update(
        {
          companyId,
          name,
          email,
          password,
          confirm_password,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Company with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Company with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteCompany(req, res) {
    try {
      const id = +req.params.id;

      let result = await company.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Company with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Company with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = CompanyController;
