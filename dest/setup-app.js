"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const driver_routes_1 = require("./routers/driver.routes");
const testing_routes_1 = require("./routers/testing.routes");
const setup_swagger_1 = require("./swagger/setup-swagger");
const setupApp = (app) => {
    app.use(express_1.default.json()); // middleware для парсинга JSON в теле запроса
    app.use('/api/drivers', driver_routes_1.driverRouter);
    app.use('/api/testing', testing_routes_1.testingRouter);
    app.get("/", (req, res) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });
    (0, setup_swagger_1.setupSwagger)(app);
    return app;
};
exports.setupApp = setupApp;
