import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
// const  fs =  require( "fs")
import * as fs from 'fs';

const app = express()

app.use(express.json())
app.use(logger('dev'))

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json',"utf8"))
// app.get("/", (req:Request, res:Response)=>{
//     return res.status(200).json({message:"Hello World"})

// })
app.get("/api/v1/tours", (req:Request, res:Response)=>{
        return res.status(200).json({
            status:'success',
            data:{
                tours
            }
        })
    
    })

const port = 4010
app.listen(port, ()=>{
    console.log(`Server running on Port:${port}`)
})