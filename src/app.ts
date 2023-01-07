import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import userRouter from './router/usersRoutes';
import tourRouter from './router/toursRoutes'

const app = express()
//1)Middlewares



app.use(logger('dev'))
app.use(express.json())

//2) Route Handlers


 //3) Routes
app.use('/api/v1/users', userRouter )
app.use('/api/v1/tours', tourRouter )

    //4) Server
const port = 4010
app.listen(port, ()=>{
    console.log(`Server running on Port:${port} 15`)
})

export default app