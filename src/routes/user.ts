//This is for the creation User()
import { User } from "../entities/User";
import { Request, Response, NextFunction, Router } from "express"
import Joi from "joi"
import { userService } from "../_helpers/service"
export const userRouter = Router()

//get all users
userRouter.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next)
});

userRouter.post("/users", async (req: Request, res: Response, next: NextFunction) => {
    userService.create(req.body)
        .then(() => res.json({ message: "User created" }))
        .catch(next)
});



//deletion
userRouter.delete('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    userService.delete(req.params.id as unknown as number)
        .then(() => res.json({ message: "User deleted" }))
        .catch(next)
});

