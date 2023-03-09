const TeacherService = require("../../services/teacherservices");
const { Op } = require("sequelize");

module.exports = async function (req, res) {
    const result = await TeacherService.createTeacher(req.body);
    res.send(result);
  }
