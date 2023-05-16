import { Router } from "express";
import multer, { Multer } from 'multer';
import path, { dirname } from 'path';
import * as ProjectController from './../Controllers/projects.controller'
import * as TrainningsController from './../Controllers/trainnings.controller'

const Routes=Router()

const storageConfig=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

export const upload: Multer = multer({ storage: storageConfig })


Routes.get('/projects',ProjectController.getProjectsAll)
Routes.post('/projects',upload.single('imageVideo'),ProjectController.postProject)
Routes.get('/projects/:id',ProjectController.getProject)
Routes.put('/projects/:id',upload.single('imageVideo'),ProjectController.updateProject)
Routes.delete('/projects/:id',ProjectController.deleteProject)


Routes.get('/trainnings',TrainningsController.getTrainningsAll)
Routes.get('/trainnings/:id',TrainningsController.getTrainningId)
Routes.post('/trainnings',upload.single('image'),TrainningsController.postTrainning)
Routes.put('/trainnings/:id',upload.single('image'),TrainningsController.updateTrainning)
Routes.delete('/trainnings/:id',TrainningsController.deleteTrainning)

export default Routes