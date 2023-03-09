const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Student extends Model {}
Student.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    regNo: {
      unique:true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    Department: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    semester: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Student",
  }
);

module.exports = Student;
