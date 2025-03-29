import { Router } from "express";
import { userService } from "../_helpers/service";

export const userRouter = Router();

// GET /api/users
userRouter.get('/', async (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
});

// POST /api/users
userRouter.post('/', async (req, res, next) => {
    userService.create(req.body)
        .then(() => res.json({ message: "User created" }))
        .catch(next);
});

// DELETE /api/users/:id
userRouter.delete('/:id', async (req, res, next) => {
    userService.delete(Number(req.params.id))
        .then(() => res.json({ message: "User deleted" }))
        .catch(next);
});