const { models } = require("../model/definition");
const {createUser} = require('./userModel');


module.exports = {
  createTeacher: async function (body) {

    var teacherData={
      firstName:body.firstname,
      lastName:body.lastname,
      userName: body.username,
      email:body.email,
      password:body.password,
      phoneNumber:body.phoneNumber


    };
    var teacherData={
      Department:body.Department,
      Officelocation:body.Officelocation,
      Officehoursr:body.Officehours,

    };
    const User = await this.createTeacher(userData);
    teacherData = {...teacherData,teacherId: User.id};
    const result = await models.teacher.create(teacherData);
    return result; 
  },
  getTeacher: async function () {
    const result = await models.teacher.findAll({
      include:{
        model: models.User,
    },
  }
    );
    return result;
  },
  geteacherById: async function (ids) {
    const result = await models.teacher.findAll({
      where: { id: ids },
      include: models.User,
    });
    return result;
  },
  updateTeacher: async function (data) {
    try {
      const student = await models.teacher.findByPk(data.id);
      if (teacher) {
        const user = await student.getUser();
        await models.teacher.update(
          { ...data },
          {
            where: {
              id: data.id,
            },
          }
        );
        await models.teacher.update(data, {
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
  removeTeacher: async function (ids) {
    const result = await models.Teacher.destroy({
      where: { id: ids },
    });
    if(result){
			return "success"
		}
		return "fail";
	},
};