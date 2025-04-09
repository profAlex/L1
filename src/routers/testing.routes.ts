import {Router} from "express";
import {Request, Response} from "express";
import {driversDb} from "../db/mock-data";

export const testingRouter = Router();

testingRouter.delete('/all-data', (req: Request, res: Response) => {
    driversDb.drivers = [];
    res.sendStatus(204);
});