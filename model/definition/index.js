const Sequelize = require("sequelize");
var config = require("../../config.json");
config = config.db;
const db = {};
let sequelize = require("../../common/dbConnection");
const User = require("../definition/User");

const models = {
  User
  
};
sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
