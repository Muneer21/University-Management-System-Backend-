const studentService = require("../../services/studentservices");
module.exports = async function (req, res) {
  const data = await studentService.getStudentById(req.query.ids);
  res.send(data);
};
