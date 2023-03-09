const Sequelize = require("sequelize");
var config = require("../../config.json");
config = config.db;
const db = {};
let sequelize = require("../../common/dbConnection");
const User = require("../definition/User");
const Student = require("../definition/student");
const teacher = require("../definition/teacher");
const courses = require("../definition/courses");
const Roles = require("../definition/Roles");
const Teacher = require("../definition/teacher");

//user-teacher one-one
User.hasOne(Teacher, { onDelete: "CASCADE", foreignKey:"userId"});
Teacher.belongsTo(User,{onDelete:"CASCADE", foreignKey:"userId"});

//user-student one to one
User.hasOne(Student, { onDelete: "CASCADE", foreignKey: "userId" });
Student.belongsTo(User, { onDelete: "CASCADE", foreignKey: "userId" });

const models = {
  User,
  Student,
  teacher,
  courses,
  Roles
  
};
sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
