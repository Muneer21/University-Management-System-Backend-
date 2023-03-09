
var express = require("express");
var router = express.Router();

const {
  createUser,
  getUser,
  getUsersbyId,
  updateUser,
  removeUser,
} = require("../Controller/index");
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.get("/getUserById", getUsersbyId);
router.put("/updateUser", updateUser);
router.delete("/removeUser", removeUser);

module.exports = router;
