import express, { Request, Response, NextFunction } from "express";
// import tours from "../model"
import * as fs from 'fs';






const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json',"utf8"))


// MiddleWare USE TO CHECK FOR ID CHECKING in update,gettour,deletetour

export const checkID = (req:Request, res:Response, next:NextFunction, val:any)=>{

    console.log(`Tour id is : ${val}`)
    if(req.params.id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }
    next()
}

//MiddleWare Use to Check for Request Body for name and price

export const checkBody = (req:Request, res:Response, next:NextFunction)=>{
    if(!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next()
}

export const createTour = (req:Request, res:Response)=>{
    console.log(req.body)
    const newId = tours[tours.length - 1].id +1
    const newTour = Object.assign({id: newId}, req.body )

    tours.push(newTour);
    fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tours), err => {
        
        return res.status(201).json({
            status:"sucess",
            data:{
                tour: newTour
            }
        })
    })
}


export const getAllTour =  (req:Request, res:Response)=>{
   
    return res.status(200).json({
        status:'success',
        results: tours.length,
        data:{
            tours
        }
    })
    
}

export const getTour = (req:Request, res:Response)=>{
    const id:any = parseInt(req.params.id)
 
    const tour = tours.find((el:any) => el.id === id)
    
    /**Here is where checkId runs after geting the id .. */
    
    
    return res.status(200).json({
        status:'success',
        data:{
            tour:tour
        }
    })
    
}


export const updateTour = (req:Request, res:Response)=>{

    return res.status(200).json({
        status:'success',
        data:{
            tour:'<soon>'
        }
    })
    
    
}


export const deleteTour = (req:Request, res:Response)=>{

    return res.status(200).json({
        status:'success',
        data:null
        
    })
    
}
