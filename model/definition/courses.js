const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class courses extends Model {}
courses.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    Crhrs: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
    Crcode: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
    Lab: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
    
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "courses",
  }
);

module.exports = courses;
