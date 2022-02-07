"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      major.hasMany(models.student);
    }
  }
  major.init(
    {
      majorId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Major ID can not empty!",
          },
          isNumeric: {
            message: "Major ID must be numeric!",
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
    },
    {
      sequelize,
      modelName: "major",
    },
  );
  return major;
};
