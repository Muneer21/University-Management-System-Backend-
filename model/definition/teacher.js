const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Teacher extends Model {}
Teacher.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    Teacherid: {
        primaryKey: true, 
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    Department: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      Officelocation: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      Officehours: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
    
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "teacher",
  }
);

module.exports = Teacher;
