"use strict";
const { Model } = require("sequelize");
const { encryptPass } = require("../helpers/bcrypt");
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
            const dataAdmin = await admin.findAll();
            for (const email in dataAdmin) {
              if (value === dataAdmin[email].dataValues.email) {
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
        beforeCreate: function (user, options) {
          user.password = encryptPass(user.password);
          user.confirm_password = encryptPass(user.confirm_password);
        },
      },
      sequelize,
      modelName: "admin",
    },
  );
  return admin;
};
