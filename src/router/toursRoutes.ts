import { Router } from "express";
import express, { Request, Response, NextFunction } from "express";

import {getAllTour, getTour, createTour, updateTour, deleteTour, checkID, checkBody} from "../controller/tour.Controller"

const router = Router()


 router.param('id', checkID )


// router
//     .get("/", getAllTour)
//     .get("/:id", getTour)
//     .post("/:id", createTour)
//     .patch("/:id", updateTour)
//     .delete("/:id", deleteTour)

router
    .route("/")
    .get(getAllTour)
    .post(checkBody, createTour)
router
    .route("/:id")
    .get(getTour).patch(updateTour)
    .delete(deleteTour);


export default router