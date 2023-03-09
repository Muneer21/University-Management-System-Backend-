const { models } = require("../model/definition");
const {createUser} = require('./userModel');
// const { Op } = require("sequelize");

module.exports = {
  createStudent: async function (body) {
    console.log(body)

    var userData={
      firstName:body.firstname,
      lastName:body.lastname,
      userName: body.username,
      email:body.email,
      password:body.password,
      phoneNumber:body.phoneNumber


    };
    var studentData={
      Department:body.Department,
      regNo:body.rollNumber,
      semester:body.semester,
      // typeofuser:body.typeofuser

    };
    const User = await createUser(userData);
    studentData = {...studentData,studentId: User.id};
    const result = await models.Student.create(studentData);
    return result; 
  },
  getStudent: async function () {
    const result = await models.Student.findAll({
      include:{
        model: models.User,
    },
  }
    );
    return result;
  },
  getStudentById: async function (ids) {
    const result = await models.Student.findAll({
      where: { id: ids },
      include: models.User,
    });
    return result;
  },
  updateStudent: async function (data) {
    try {
      const student = await models.Student.findByPk(data.id);
      if (student) {
        const user = await student.getUser();
        await models.Student.update(
          { ...data },
          {
            where: {
              id: data.id,
            },
          }
        );
        await models.User.update(data, {
          where: {
            id: user.id,
          },
        });
        return "Success";
      } else {
        return "fail";
      }
    } catch (error) {
      console.error(error);
      return "error";
    }
  },
  removeStudent: async function (ids) {
    const result = await models.Student.destroy({
      where: { id: ids },
    });
    if(result){
			return "success"
		}
		return "fail";
	},
};