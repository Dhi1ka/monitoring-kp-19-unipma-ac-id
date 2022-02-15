"use strict";
const { Model } = require("sequelize");

const { encryptPass } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lecturer.init(
    {
      lecturerId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Lecturer ID cannot be empty!!",
          },
          isNumeric: {
            message: "Lecturer ID must be numeric!",
          },
        },
      },
      name: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Name can not empty!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          message: "Email already use!",
        },
        validate: {
          notEmpty: {
            message: "Email can not empty!",
          },
          isEmail: {
            message: "Email not valid!",
          },
          async isUnique(value) {
            const dataLecturer = await lecturer.findAll();
            for (const email in dataLecturer) {
              if (value === dataLecturer[email].dataValues.email) {
                throw new Error("Email already use!");
              }
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password can not empty!",
          },
          len: [8, 255],
        },
      },
      confirm_password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Confirm Password can not empty!",
          },
          len: [8, 255],
          match(value) {
            if (value !== this.password) {
              throw new Error("Password does not match!");
            }
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (lecturer, options) {
          lecturer.password = encryptPass(student.password);
        },
      },
      sequelize,
      modelName: "lecturer",
    },
  );
  return lecturer;
};
