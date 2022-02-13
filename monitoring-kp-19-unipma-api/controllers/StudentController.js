const { student } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class StudentController {
  static async getAllStudents(req, res) {
    try {
      let dataStudents = await student.findAll({});

      return res.status(200).json(dataStudents);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailStudent(req, res) {
    try {
      const id = +req.params.id;

      let result = await student.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Student with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchStudent(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createStudent(req, res) {
    try {
      const { studentId, name, email, password, confirm_password, majorId } =
        req.body;

      const result = await student.create({
        studentId,
        name,
        email,
        password,
        confirm_password,
        majorId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editStudent(req, res) {
    try {
      const id = +req.params.id;
      const { studentId, name, email, password, confirm_password, majorId } =
        req.body;

      let result = await student.update(
        {
          studentId,
          name,
          email,
          password,
          confirm_password,
          majorId,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Student with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Student with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteStudent(req, res) {
    try {
      const id = +req.params.id;

      let result = await student.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Student with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Student with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { name, email, password, confirm_password } = req.body;

      let resultRegister = await student.create({
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

      let resultLogin = await student.findOne({
        where: {
          email,
        },
      });

      if (resultLogin) {
        if ((decryptPass, resultLogin.password)) {
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
          message: "Student not found!",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = StudentController;
