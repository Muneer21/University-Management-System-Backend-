// const bcrypt = require("bcrypt");
const teacherModel = require("../model/studentModel");
module.exports = {
  createTeacher: async function (body) {
    const data = await studentModel.createTeacher(body);
    return data;
  },
  getTeacher: async function () {
    const data = await studentModel.getTeacher();
    return data;
  },
  getTeacherById: async function (ids) {
    const data = await studentModel.getTeacherById(ids);
    return data;
  },
  updateTeacher: async function (body) {
    const data = await studentModel.updateTeacher(body);
    return data;
  },
  removeTeacher: async function (ids) {
    const data = await studentModel.removeTeacher(ids);
    return data;
  },
};