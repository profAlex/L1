import express, {Express, Request, Response} from "express";

import {driverRouter} from "./routers/driver.routes";
import {testingRouter} from "./routers/testing.routes";
import {setupSwagger} from "./swagger/setup-swagger";

export const setupApp = (app: Express) => {
    app.use(express.json()); // middleware для парсинга JSON в теле запроса

    app.use('/api/drivers', driverRouter);
    app.use('/api/testing', testingRouter);

    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });

    setupSwagger(app);

    return app;
};

