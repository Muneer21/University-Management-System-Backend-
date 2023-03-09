const userService = require("../../services/userservices");
module.exports = async function (req, res) {
  const data = await userService.getUserById(req.query.ids);
  res.send(data);
};
