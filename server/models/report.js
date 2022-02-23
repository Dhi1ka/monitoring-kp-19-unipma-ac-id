"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      report.belongsTo(models.student);
    }
  }
  report.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Title can not empty!",
          },
        },
      },
      activity: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Activity can not empty!",
          },
        },
      },
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
    },
    {
      sequelize,
      modelName: "report",
    },
  );
  return report;
};
