const TeacherService = require("../../services/teacherservices");
module.exports = async function (req, res) {
  const data = await TeacherService.getTeacherById(req.query.ids);
  res.send(data);
};
