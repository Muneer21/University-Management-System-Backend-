
var express = require("express");
var router = express.Router();

const {
    createTeacher,getTeacher,getTeacherById,updateTeacher,removeTeacher
} = require("../Controller/index");


router.post("/createTeacher", createTeacher);
router.get('/getTeacher', getTeacher);
router.get('/getTeacher', getTeacherById);
router.put('/updateTeacher', updateTeacher);
router.delete('/removeTeacher', removeTeacher);



module.exports = router;
