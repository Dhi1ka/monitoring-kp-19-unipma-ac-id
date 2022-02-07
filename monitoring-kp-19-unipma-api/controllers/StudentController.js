const { student } = require("../models");

class StudentController {
  static async getAllStudents(req, res) {
    try {
      let dataStudents = await student.findAll({});

      res.status(200).json(dataStudents);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailStudent(req, res) {
    try {
      const id = +req.params.id;

      let result = await student.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Student with ID ${id} not found!`,
          });
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

  static async addStudent(req, res) {
    try {
      const { studentId, name, email, password, confirm_password, majorId } =
        req.body;

      let result = await student.create({
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

  static async updateStudent(req, res) {
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
}

module.exports = StudentController;
