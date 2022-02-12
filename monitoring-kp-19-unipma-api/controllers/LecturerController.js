const { lecturer } = require("../models");

class LecturerController {
  static async getAllLecturers(req, res) {
    try {
      let dataLecturers = await lecturer.findAll({});

      res.status(200).json(dataLecturers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailLecturer(req, res) {
    try {
      const id = +req.params.id;

      let result = await lecturer.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Lecturer with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchLecturer(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createLecturer(req, res) {
    try {
      const { lecturerId, name, email, password, confirm_password } = req.body;

      let result = await lecturer.create({
        lecturerId,
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

  static async editLecturer(req, res) {
    try {
      const id = +req.params.id;
      const { lecturerId, name, email, password, confirm_password } = req.body;

      let result = await lecturer.update(
        {
          lecturerId,
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
            message: `Lecturer with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Lecturer with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteLecturer(req, res) {
    try {
      const id = +req.params.id;

      let result = await lecturer.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Lecturer with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Lecturer with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = LecturerController;
