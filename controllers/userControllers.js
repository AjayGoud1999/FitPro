const {loginService,registerService} = require('../services/userServices')

const loginController=async(req,res,next)=>{
    const loginDetails = await loginService(req);
    return res.json(loginDetails)
}
const registerController=async(req,res,next)=>{
    const registerDetails = await registerService(req);
    return res.json(registerDetails)
}

module.exports={loginController, registerController}