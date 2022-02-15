"use strict";
const { Model } = require("sequelize");

const { encryptPass } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.hasOne(models.report);
      student.belongsTo(models.major);
    }
  }
  student.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Student ID can not empty!",
          },
          isNumeric: {
            message: "Student ID must be numeric!",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
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
            const dataStudent = await student.findAll();
            for (const email in dataStudent) {
              if (value === dataStudent[email].dataValues.email) {
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
      majorId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Student ID can not empty!",
          },
          isNumeric: {
            message: "Student must be numeric!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (student, options) {
          student.password = encryptPass(student.password);
        },
      },
      sequelize,
      modelName: "student",
    },
  );
  return student;
};
