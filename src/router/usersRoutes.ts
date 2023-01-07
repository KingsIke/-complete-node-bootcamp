// import { Router } from "express";
import { Router } from "express";

import {getAllUsers,  getUsers, createUser, updateUser, deleteUser } from "../controller/userController"


const router = Router()


router
    .get("/", getAllUsers)
    .get("/:id", getUsers)
    .post("/:id", createUser)
    .patch("/:id", updateUser)
    .delete("/:id", deleteUser)



// app
//     .route("api/v1/users")
//     // .get(getAllUsers)
//     .post(createUser);

// app
//     .route('api/v1/users/:id')
//     .get(getUsers)
//     .patch(updateUser)
//     .delete(deleteUser);

export default router