"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const mock_data_1 = require("./db/mock-data");
const driver_types_1 = require("./drivers/driver-types");
const driver_body_validation_1 = require("./drivers/driver-body-validation");
const http_statuses_1 = require("./core/http-statuses");
const setupApp = (app) => {
    app.use(express_1.default.json()); // middleware для парсинга JSON в теле запроса
    // основной роут
    app.get("/", (req, res) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });
    app.get("/drivers", (req, res) => {
        res.status(200).json(mock_data_1.driversDb.drivers);
    });
    app.get('/drivers/:id', (req, res) => {
        const driver = mock_data_1.driversDb.drivers.find((d) => d.id === +req.params.id);
        if (!driver) {
            res.status(404).send({ message: "Driver not found" });
            return;
        }
        res.status(200).send(driver);
    });
    app.post('/drivers', (req, res) => {
        const errors = (0, driver_body_validation_1.driverInputDtoValidation)(req.body);
        if (errors.length > 0) {
            res.status(http_statuses_1.HttpStatus.BadRequest).send({ errors: errors });
            return;
        }
        const newDriver = Object.assign({ id: mock_data_1.driversDb.drivers.length ? mock_data_1.driversDb.drivers[mock_data_1.driversDb.drivers.length - 1].id + 1 : 1, status: driver_types_1.DriverStatus.Online, createdAt: new Date() }, req.body);
        mock_data_1.driversDb.drivers.push(newDriver);
        res.status(201).send(newDriver);
    });
    app.delete('/testing/all-data', (req, res) => {
        mock_data_1.driversDb.drivers = [];
        res.sendStatus(204);
    });
    return app;
};
exports.setupApp = setupApp;
