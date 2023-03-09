const userService = require("../../services/userservices");
module.exports = async function (req, res) {
  const data = await userService.removeUser(req.query.ids);
  res.send(data);
};
