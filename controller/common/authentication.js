const commonService = require('../../services/commonservices')

module.exports =async function(req,res){
    const data =await commonService.login(req.body)
    res.send(data)
};

module.exports =async function(req,res){
    const data =await commonService.logout(req.body)
    res.send(data)
};