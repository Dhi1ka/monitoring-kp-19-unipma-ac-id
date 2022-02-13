"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init(
    {
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
    },
    {
      sequelize,
      modelName: "admin",
    },
  );
  return admin;
};
