import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import userRouter from './router/usersRoutes';
import tourRouter from './router/toursRoutes'
import path from "path"
import dotenv from "dotenv"

const app = express()
dotenv.config()

//1)Middlewares
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))

}




app.use(express.json())
app.use(express.static(path.join(__dirname, "..", 'public')))
//2) Route Handlers

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('hi from a middleware 👐🏾 ')
    next()
})

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(new Date().toISOString())
    next()
})
//3) Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tours', tourRouter)

//4) Server


export default app
