const Teacherservice = require("../../services/teacherservices");
module.exports = async function (req, res) {
  const data = await Teacherservice.removeTeacher(req.query.ids);
  res.send(data);
};
