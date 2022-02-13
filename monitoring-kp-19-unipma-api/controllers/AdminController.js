const { admin } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class AdminController {
  static async getAllAdmins(req, res) {
    try {
      let dataAdmins = await admin.findAll({});

      return res.status(200).json(dataAdmins);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailAdmin(req, res) {
    try {
      const id = +req.params.id;

      let result = await admin.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Admin with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchAdmin(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createAdmin(req, res) {
    try {
      const { name, email, password, confirm_password } = req.body;

      const result = await admin.create({
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

  static async editAdmin(req, res) {
    try {
      const id = +req.params.id;
      const { name, email, password, confirm_password } = req.body;

      let result = await admin.update(
        {
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
            message: `Admin with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Admin with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteAdmin(req, res) {
    try {
      const id = +req.params.id;

      let result = await admin.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Admin with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Admin with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { name, email, password, confirm_password } = req.body;

      let resultRegister = await admin.create({
        name,
        email,
        password,
        confirm_password,
      });
      res.status(201).json(resultRegister);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let resultLogin = await admin.findOne({
        where: {
          email,
        },
      });

      if (resultLogin) {
        if ((decryptPass, password)) {
          let token = tokenGenerator(resultLogin);

          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Your password is not correct!",
          });
        }
      } else {
        res.status(404).json({
          message: "Admin not found!",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = AdminController;
