"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const driver_routes_1 = require("./routers/driver.routes");
const testing_routes_1 = require("./routers/testing.routes");
const setupApp = (app) => {
    app.use(express_1.default.json()); // middleware для парсинга JSON в теле запроса
    app.get("/", (req, res) => {
        res.status(200).send("Hello my first BACK-END APP!");
    });
    app.use('/driver', driver_routes_1.driverRouter);
    app.use('/testing', testing_routes_1.testingRouter);
    return app;
};
exports.setupApp = setupApp;
