import express, { Request, Response, NextFunction } from "express";


export const getAllUsers =  (req:Request, res:Response)=>{
    return res.status(200).json({
        status:'error',
        message:"This route is not yet definded!"
    })
    
    
}

export const getUsers =  (req:Request, res:Response)=>{
    return res.status(500).json({
        status:'error',
        message:"This route is not yet definded!"
    })
}

export const createUser =  (req:Request, res:Response)=>{
    return res.status(500).json({
        status:'error',
        message:"This route is not yet definded!"
    })
}

export const updateUser =  (req:Request, res:Response)=>{
    return res.status(500).json({
        status:'error',
        message:"This route is not yet definded!"
    })
}

export const deleteUser =  (req:Request, res:Response)=>{
    return res.status(500).json({
        status:'error',
        message:"This route is not yet definded!"
    })
}
