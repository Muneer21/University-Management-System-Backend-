const TeacherService = require("../../services/teacherservices");
module.exports = async function (req, res) {
  const data = await TeacherService.getTeacher(req.body);
  res.send(data);
};
