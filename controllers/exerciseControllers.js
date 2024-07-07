const {getBodyPartListService,getEachExerciseService,getExerciseDataByIdService} = require('../services/exerciseService')
const getBodyPartList=async(req,res,next)=>{
    const getBodyPartListDetails = await getBodyPartListService(req.body);
    return res.json(getBodyPartListDetails)
}
const getEachExerciseController=async(req,res,next)=>{
    const getEachExerciseDetails = await getEachExerciseService(req);
    return res.json(getEachExerciseDetails)
}
const getExerciseDataByIdController=async(req,res,next)=>{
    const getExerciseDetailsByID = await getExerciseDataByIdService(req);
    return res.json(getExerciseDetailsByID)
}

module.exports={getBodyPartList, getEachExerciseController,getExerciseDataByIdController}