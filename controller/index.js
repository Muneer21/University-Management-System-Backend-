module.exports = {
    //users
    createUser: require("./user/createUsers"),
    getUser: require("./user/getUser"),
    createRole: require("./common/role"),
    getUsersbyId: require("./user/getUserbyId"),
    updateUser: require("./user/updateUser"),
    removeUser: require("./user/removeUser"),

    //student
    createStudent:require("./students/createStudent"),
    getStudent:require("./students/getStudent"),
    getStudentById:require("./students/getStudentById"),
    removeStudent:require("./students/removeStudent"),
    updateStudent:require("./students/updateStudent"),

    //teacher
    createTeacher:require("./teacher/createTeacher"),
    getTeacher:require("./teacher/getTeacher"),
    getTeacherById:require("./teacher/getTeacherById"),
    removeTeacher:require("./teacher/removeTeacher"),
    updateTeacher:require("./teacher/updateTeacher"),

    //login
    login:require("./common/authentication"),
    //logout
    logout:require("./common/authentication"),

    
  
  };
  