// const Exercise = require('../models/exerciseModel')
const Exercise = require("../models/exerciseModel")
// const ObjectId  = require('mongodb').ObjectID;
const getBodyPartListService = async(req,res)=>{
    const exerciseDetails = await Exercise.find({}).catch(e=>{throw new Error(e)})
    // console.log("exerciseDetails",exerciseDetails)
    if(exerciseDetails===null){
        return {status:"failure",message:"No Data Found"}
    }else{
        let originalList=[]
        exerciseDetails.map(x=>{
            if(!originalList.includes(x.bodyPart)){
                originalList.push(x.bodyPart)
            }
        })
        let obj={
            status:"success",
            details:originalList
        }
        return obj
    }
}

const getEachExerciseService = async(req,res)=>{
    if(req.body.bodypart==="all"){
        const exerciseDetails = await Exercise.find({}).catch(e=>{throw new Error(e)})
        if(exerciseDetails===null){
            return {status:"failure",message:"No Data Found"}
        }else{
            let obj={
                status:"success",
                details:exerciseDetails
            }
            return obj
        }
    }
    else{
        const exerciseDetails = await Exercise.find({bodyPart:req.body.bodypart}).catch(e=>{throw new Error(e)})
        if(exerciseDetails===null){
            return {status:"failure",message:"No Data Found"}
        }else{
            let obj={
                status:"success",
                details:exerciseDetails
            }
            return obj
        }
    }
   
}


const getExerciseDataByIdService  = async(req,res)=>{
    // console.log(req.body)
    const exerciseDetails = await Exercise.find({"_id":req.body.id.id}).catch(e=>{throw new Error(e)})
    if(exerciseDetails===null){
        return {status:"failure",message:"No Data Found"}
    }else{
        let obj={
            status:"success",
            details:exerciseDetails
        }
        return obj
    }
}

module.exports={getBodyPartListService,getEachExerciseService,getExerciseDataByIdService}