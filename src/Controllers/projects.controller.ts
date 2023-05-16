import { Request,Response } from "express";
import { ProjectsModel } from "../Model/projects.model";



export const getProjectsAll=async(req:Request,res:Response)=>{
   try{
        let projectsList=await ProjectsModel.findAll()
        res.json(projectsList)

   }catch(e){
    res.json(e)
   }

}

export const getProject=async(req:Request,res:Response)=>{


   let {id}=req.params
   let projectId=await ProjectsModel.findByPk(id)
   if(projectId){
      res.json(projectId)
   }else{
      res.json('Projeto não existe')
   }

}
export const postProject=async(req:Request,res:Response)=>{
      let {name,description,tecs, urldeploy,repository}=req.body
      let imageVideo=req.file?.filename
        
        try{
         let newProduct=await ProjectsModel.create({name,description,tecs,urldeploy,repository,imageVideo})
         res.status(201).json({id:newProduct.id,newProduct})
      
        }catch(e){
         res.status(404).json(e)
        }
      
      



}
export const updateProject=async(req:Request,res:Response)=>{
   let {id}=req.params
   let {name,description,tecs,urldeploy,repository}=req.body
   if(name !=='' && description !=='' && tecs !== 0 &&  urldeploy !=='' && repository !=='' ){
       let projectId=await ProjectsModel.findByPk(id)
       if(projectId){
            projectId.name=name
            projectId.description=description
            projectId.tecs=tecs
           if (req.file) {
               projectId.imageVideo = req.file.filename;
             }
           await projectId.save()
           res.status(200).json(projectId)
       }else{
           res.status(404).json({error:'produto não existe'})
       }
       
   }else{
       res.status(201).json({error:'algo deu errado'})
   }

}

export const deleteProject=async(req:Request,res:Response)=>{
   let {id}=req.params
   try{
     await ProjectsModel.destroy({where:{id}})
     res.json({success:'Projeto deletado'})

   }catch(e){
      res.json(e)
   }

}