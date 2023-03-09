const studentService = require("../../services/studentservices");
const { Op } = require("sequelize");

module.exports = async function (req, res) {
    const result = await studentService.createStudent(req.body);
    res.send(result);
  }
