import { Request,Response } from "express";
import { TrainningsModel } from "../Model/trainnings.model";


export const getTrainningsAll=async(req:Request,res:Response)=>{
    try{
        let trainningsList=await TrainningsModel.findAll()
        res.json(trainningsList)

   }catch(e){
    res.json(e)
   }

}

export const getTrainningId=async(req:Request,res:Response)=>{
    let {id}=req.params
    let trainningId=await TrainningsModel.findByPk(id)
    if(trainningId){
       res.json(trainningId)
    }else{
       res.json('Formação não existe')
    }

}
export const postTrainning=async(req:Request,res:Response)=>{
    let {name,school,nivel,type,state}=req.body
    let image=req.file?.filename
      
      try{
       let newTrainning=await TrainningsModel.create({name,school,nivel,type,state,image})
       res.status(201).json({id:newTrainning.id,newTrainning})
    
      }catch(e){
       res.status(404).json(e)
      }
    

}
export const updateTrainning=async(req:Request,res:Response)=>{
    let {id}=req.params
    let {name,school,nivel,type,state}=req.body
    if(name !=='' && school !=='' && type !== '' && nivel !=='' && state !== '' ){
        let trainningId=await TrainningsModel.findByPk(id)
        if(trainningId){
            trainningId.name=name
            trainningId.school=school
            trainningId.type=type
            trainningId.nivel=nivel
            trainningId.state=state
            if (req.file) {
                trainningId.image = req.file.filename;
              }
            await trainningId.save()
            res.status(200).json(trainningId)
        }else{
            res.status(404).json({error:'curso não existe'})
        }
        
    }else{
        res.status(404).json({error:'algo deu errado'})
    }
 

}

export const deleteTrainning=async(req:Request,res:Response)=>{

    let {id}=req.params
    try{
        await TrainningsModel.destroy({where:{id}})
        res.json({'success':'curso deletado'})
    }catch(e){
        res.status(404).json(e)
    }
}