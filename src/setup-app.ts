import express, {Express, Request, Response} from "express";
import {driversDb} from "./db/mock-data";
import {Driver, DriverStatus} from "./drivers/driver-types";
import {driverInputDtoValidation} from "./drivers/driver-body-validation";
import {ValidationError} from "./core/validation-error";
import {HttpStatus} from "./core/http-statuses";
import {driverRouter} from "./routers/driver.routes";
import {testingRouter} from "./routers/testing.routes";

export const setupApp = (app: Express) => {
    app.use(express.json()); // middleware для парсинга JSON в теле запроса

    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });



    app.use('/driver', driverRouter);
    app.use('/testing', testingRouter);


    return app;
};

