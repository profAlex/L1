import express, {Express, Request, Response} from "express";
import {driversDb} from "./db/mock-data";
import {Driver, DriverStatus} from "./drivers/driver-types";
import {driverInputDtoValidation} from "./drivers/driver-body-validation";
import {ValidationError} from "./core/validation-error";
import {HttpStatus} from "./core/http-statuses";

export const setupApp = (app: Express) => {
    app.use(express.json()); // middleware для парсинга JSON в теле запроса

    // основной роут
    app.get("/", (req, res) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });

    app.get("/drivers", (req, res) => {
        res.status(200).json(driversDb.drivers);
    });

    app.get('/drivers/:id', (req: Request, res: Response) => {
        const driver = driversDb.drivers.find((d) => d.id === +req.params.id);
        if(!driver) {
            res.status(404).send({ message: "Driver not found" });
            return;
        }

        res.status(200).send(driver);
    });


    app.post('/drivers', (req: Request, res: Response) => {
        const errors: ValidationError[] = driverInputDtoValidation(req.body);
        if(errors.length > 0) {
            res.status(HttpStatus.BadRequest).send({ errors: errors });
            return;
        }

        const newDriver: Driver = {
            id: driversDb.drivers.length ? driversDb.drivers[driversDb.drivers.length - 1].id + 1 : 1,
            status: DriverStatus.Online,
            createdAt: new Date(),
            ...req.body
        };

        driversDb.drivers.push(newDriver);

        res.status(201).send(newDriver);
    });

    app.delete('/testing/all-data', (req: Request, res: Response) => {
        driversDb.drivers = [];
        res.sendStatus(204);
    });

    return app;
};

