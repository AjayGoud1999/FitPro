const router = require("express").Router();
const routesList= require('../controllers/exerciseControllers')

const routesList2= require('../controllers/userControllers')



router.post('/login',routesList2.loginController)



router.post('/register', routesList2.registerController)

router.get('/getBodyPartList',routesList.getBodyPartList)



router.post('/getEachExerciseList', routesList.getEachExerciseController)


router.post('/getExerciseDataById',routesList.getExerciseDataByIdController)


module.exports = router;

