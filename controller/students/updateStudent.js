const StudentService = require("../../services/studentservices");
module.exports = async function (req, res) {
  const data = await StudentService.updateStudent(req.body);
  res.send(data);
};
