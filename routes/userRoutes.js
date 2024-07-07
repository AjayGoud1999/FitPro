const router = require("express").Router();
const routesList= require('../controllers/userControllers')



router.get('/login',routesList.LoginController)



router.post('/register', routesList.registerController)




module.exports = router;

