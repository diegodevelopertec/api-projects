import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { Request,Response } from 'express'
import path from 'path'
import Routes from './Routes'

dotenv.config()
const api=express()
api.use(cors())
api.use('/uploads',express.static(path.join(__dirname,'../public/')));
api.use(express.urlencoded({extended:true}))
api.use(express.static(path.join(__dirname,'../public/')))
api.use(Routes)
api.use((req,res)=>{
    res.status(404).json({error:'Página não encotrada'})
})

api.listen(process.env.PORT)