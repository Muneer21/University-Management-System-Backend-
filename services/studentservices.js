// const bcrypt = require("bcrypt");
const studentModel = require("../model/studentModel");
module.exports = {
  createStudent: async function (body) {
    const data = await studentModel.createStudent(body);
    return data;
  },
  getStudent: async function () {
    const data = await studentModel.getStudent();
    return data;
  },
  getStudentById: async function (ids) {
    const data = await studentModel.getStudentById(ids);
    return data;
  },
  updateStudent: async function (body) {
    const data = await studentModel.updateStudent(body);
    return data;
  },
  removeStudent: async function (ids) {
    const data = await studentModel.removeStudent(ids);
    return data;
  },
};