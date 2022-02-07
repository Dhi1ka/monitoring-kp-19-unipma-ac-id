"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Company ID can not empty!",
          },
          isNumeric: {
            message: "Company ID must be numeric!",
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
        validate: {
          notEmpty: {
            message: "Email can not empty!",
          },
          isEmail: {
            message: "Email not valid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password can not empty!",
          },
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
      modelName: "company",
    },
  );
  return company;
};
