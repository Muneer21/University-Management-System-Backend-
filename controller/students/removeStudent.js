const StudentService = require("../../services/studentservices");
module.exports = async function (req, res) {
  const data = await StudentService.removeStudent(req.query.ids);
  res.send(data);
};
